import { list } from '@keystone-6/core'
import { allowAll, denyAll } from '@keystone-6/core/access'
import { json, relationship, text, timestamp } from '@keystone-6/core/fields'

export const SessionSchema = list({
  access: allowAll,
  fields: {
    user: relationship({ ref: 'User.sessions', many: false }),
    accessToken: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
    userAgent: text(),
    ip: text(),
    updatedAt: timestamp({
      db: {
        updatedAt: true
      }
    }),
    expiresAt: timestamp(),
  }
})
