import 'dotenv/config'

import { randomBytes } from 'crypto';
import { createAuth } from '@keystone-6/auth';

import { jwtSessionStrategy } from './jwt-session-strategy';

let sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== 'production') {
  sessionSecret = randomBytes(32).toString('hex');
}

// withAuth is a function we can use to wrap our base configuration
const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',

  sessionData: 'name isAdmin',
  secretField: 'password',

  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

// statelessSessions uses cookies for session tracking
//   these cookies have an expiry, in seconds
//   we use an expiry of 30 days for this starter
const sessionMaxAge = 60 * 60 * 24 * 30;

const session = jwtSessionStrategy({
  maxAge: sessionMaxAge,
  secret: sessionSecret!,
  sameSite: "lax"
});

export {
  withAuth,
  session,
};
