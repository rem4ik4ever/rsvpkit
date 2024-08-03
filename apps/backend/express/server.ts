import { Context } from '.keystone/types'
import { Express } from 'express'
import { createGoogleRouter } from '../services/google'
import { logger } from './logger'

const errorHandler = (err, req, res, next) => {
  logger.error(err.message, { metadata: err.stack });
  res.status(500).json({ message: 'An error occurred', error: err.message });
};


export const extendExpressApp = (app: Express, commonContext: Context) => {
  app.use('/api/oauth/google', createGoogleRouter(commonContext));

  app.use(errorHandler);
}
