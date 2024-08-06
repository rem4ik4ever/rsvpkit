import { Context } from '.keystone/types'
import { google } from 'googleapis'
import { Router } from 'express'
import { session } from '../auth'
import { v4 } from 'uuid'
import { teamService } from './team.service'

const googleAuthClient = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
})

const createAuthUrl = async () => {
  const url = await googleAuthClient.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'openid',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  })
  return url;
}
google.options({ auth: googleAuthClient });

export const createGoogleRouter = (commonContext: Context) => {
  const router = Router();

  router.get('/', async (req, res) => {
    const context = await commonContext.withRequest(req, res)
    const url = await createAuthUrl();
    res.redirect(url);
  })

  router.get('/callback', async (req, res, next) => {
    try {

      const context = await commonContext.withRequest(req, res)
      const code = req.query.code as string;
      const { tokens } = await googleAuthClient.getToken(code);
      googleAuthClient.setCredentials(tokens);
      const loginTicket = await googleAuthClient.verifyIdToken({
        idToken: tokens.id_token as string,
        audience: process.env.GOOGLE_CLIENT_ID
      })
      const profile = loginTicket.getPayload();
      const exists = await context.db.User.findOne({
        where: {
          email: profile?.email
        }
      });
      if (exists) {
        //@todo check if team exists
        const token = await session.start({
          context,
          data: {
            itemId: exists.id,
            listKey: 'User',
            data: {
              isAdmin: false,
              name: exists.name,
              currentTeamId: exists.currentTeamId!,
              id: exists.id
            }
          }
        })
        return res.redirect(`${process.env.CLIENT_URL}/login?token=${token}`);
      }
      const user = await context.db.User.createOne({
        data: {
          email: profile?.email,
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          emailConfirmedAt: new Date(),
          name: profile?.name,
          avatarUrl: profile?.picture,
          password: v4(),
        }
      })
      const account = await context.prisma.account.create({
        data: {
          provider: 'google',
          type: 'oauth',
          providerAccountId: profile?.sub,
          refresh_token: tokens.refresh_token!,
          access_token: tokens.access_token!,
          expires_at: tokens.expiry_date ? new Date(tokens.expiry_date * 1000) : undefined,
          token_type: tokens.token_type!,
          scope: tokens.scope,
          id_token: tokens.id_token!,
        }
      })
      const token = await session.start({
        context,
        data: {
          itemId: user.id,
          listKey: 'User',
          data: {
            isAdmin: false,
            name: user.name,
            currentTeamId: user.currentTeamId!,
            id: user.id
          }
        }
      })

      if (!code) {
        res.redirect(`${process.env.CLIENT_URL}/login?oauth_error=oauth_failed`);
      } else {
        res.redirect(`${process.env.CLIENT_URL}/login?token=${token}`);
      }
    } catch (error) {
      console.log({ error })
      next(error);
    }
  })

  return router;

}
