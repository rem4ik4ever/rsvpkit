import path from 'node:path'

import { resetDatabase } from '@keystone-6/core/testing'
import { getContext } from '@keystone-6/core/context'
import config from './keystone'
import * as PrismaModule from '.prisma/client'

const dbUrl = `file:./test-${process.env.JEST_WORKER_ID}.db`;
export const prismaSchemaPath = path.join(__dirname, 'schema.prisma')

const testConfig = { ...config, db: { ...config.db, url: dbUrl } };

export const context = getContext(testConfig, PrismaModule)

export const resetDB = async () => {
  await resetDatabase(testConfig.db.url, prismaSchemaPath);
}
