import { Context } from '.keystone/types'
// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema';

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth';
import { initializeWorkers } from './bullmq';
import { extendExpressApp } from './express/server';

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || []

export default withAuth(
  config({
    server: {
      port: parseInt(process.env.PORT as string, 10) || 3300,
      cors: {
        origin: [
          ...allowedOrigins
        ], // and other origins you might want react to be served from
      },
      extendExpressApp
    },
    graphql: {
      debug: true,
      path: '/api/graphql',
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'sqlite',
      url: 'file:./keystone.db',
      onConnect: async () => {
        initializeWorkers()
      }
    },
    lists,
    session,
    ui: {
      isAccessAllowed: (context: Context) => {
        console.log({ session: context.session })
        return !!context.session?.data?.isAdmin
      }
    },
  })
);