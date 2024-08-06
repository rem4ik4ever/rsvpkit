import type { Context } from '.keystone/types'
import { randomBytes } from 'node:crypto'
import * as cookie from 'cookie';
import { SessionStrategy } from '@keystone-6/core/types'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
import { addSeconds } from 'date-fns';

interface JwtSessionStrategyParams {
  secret?: string
  maxAge?: number
  cookieName?: string
  path?: string
  secure?: boolean
  domain?: string
  sameSite?: 'lax' | 'strict' | 'none'
}

type OurJWTClaims = {
  id: string
  tokenId: string
}

async function jwtSign(claims: OurJWTClaims, jwtSessionSecret: string): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      claims,
      jwtSessionSecret,
      {
        algorithm: 'HS256', // HMAC-SHA256
      },
      (err, token) => {
        if (err) return reject(err)
        if (!token) return reject(new Error('No token'))
        return resolve(token)
      }
    )
  })
}

async function jwtVerify({ token, secret, maxAge }: { token: string, secret: string, maxAge: number }): Promise<OurJWTClaims | null> {
  return new Promise(resolve => {
    jwt.verify(
      token,
      secret,
      {
        algorithms: ['HS256'],
        maxAge: maxAge, // we use an expiry of 1 hour for this example
      },
      (err, result) => {
        if (err || typeof result !== 'object') return resolve(null)
        if (typeof result.id !== 'string') return resolve(null)
        return resolve(result as OurJWTClaims)
      }
    )
  })
}

interface Session {
  listKey: string
  itemId: string
  data: {
    isAdmin: boolean
    name: string
    currentTeamId: string
    id: string
  }
}

export function jwtSessionStrategy({
  secret = randomBytes(32).toString('base64url'),
  maxAge = 60 * 60 * 8, // 8 hours,
  cookieName = 'keystonejs-session',
  path = '/',
  secure = process.env.NODE_ENV === 'production',
  domain,
  sameSite = 'lax',
}: JwtSessionStrategyParams = {}): SessionStrategy<Session, any> {
  // atleast 192-bit in base64
  if (secret.length < 32) {
    throw new Error('The session secret must be at least 32 characters long')
  }

  return {
    async get({ context }: { context: Context }): Promise<Session | undefined> {
      if (!context?.req) return

      const cookies = cookie.parse(context.req.headers.cookie || '')
      const bearer = context.req.headers.authorization?.replace('Bearer ', '')
      const token = bearer || cookies[cookieName]
      if (!token) return
      try {
        const jwtResult = await jwtVerify({ token, secret, maxAge })
        if (!jwtResult) return

        const { id, tokenId } = jwtResult
        const session = await context.sudo().db.Session.findOne({ where: { accessToken: tokenId } })

        if (!session) return
        if (session.userId !== id) return
        if (session.expiresAt && new Date(session.expiresAt) < new Date()) return

        const who = await context.sudo().db.User.findOne({ where: { id } })
        if (!who) return
        return {
          listKey: 'User',
          itemId: id,
          data: {
            isAdmin: who.isAdmin,
            name: who.name,
            currentTeamId: who.currentTeamId,
            id: who.id,
          }
        }
      } catch (err) { }
    },
    async end({ context }: { context: Context }): Promise<void> {
      if (context?.res) {
        context.res.setHeader(
          'Set-Cookie',
          cookie.serialize(cookieName, '', {
            maxAge: 0,
            expires: new Date(),
            httpOnly: true,
            secure,
            path,
            sameSite,
            domain,
          })
        )
      }

      if (!context?.req) return

      const cookies = cookie.parse(context.req.headers.cookie || '')
      const bearer = context.req.headers.authorization?.replace('Bearer ', '')
      const token = bearer || cookies[cookieName]
      if (!token) return

      await context.prisma.session.update({
        where: {
          accessToken: token
        },
        data: {
          expiresAt: new Date()
        }
      })
    },
    async start({ context, data }: { context: Context, data: Session }): Promise<string | undefined> {
      if (!context?.res) return
      const userAgent = context.req?.headers['user-agent']
      let ip = context.req?.headers['x-forwarded-for'] || context.req?.socket.remoteAddress
      if (typeof ip === 'object') {
        ip = ip.join(', ')
      }
      const expiresAt = addSeconds(new Date(), maxAge)
      const sessionEntry = await context.prisma.session.create({
        data: {
          accessToken: v4(),
          userId: data.itemId,
          userAgent,
          ip,
          expiresAt
        }
      })
      const token = await jwtSign({ id: data.itemId, tokenId: sessionEntry.accessToken }, secret)
      if (!sessionEntry) return

      context.res.setHeader(
        'Set-Cookie',
        cookie.serialize(cookieName, token, {
          maxAge,
          expires: expiresAt,
          httpOnly: true,
          secure,
          path,
          sameSite,
          domain,
        })
      )

      return token
    },
  }
}
