import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship, timestamp, } from '@keystone-6/core/fields'

export const AccountSchema = list({
  access: allowAll,
  fields: {
    user: relationship({ ref: 'User.accounts', many: false }),
    type: text({ validation: { isRequired: true } }),
    provider: text({ validation: { isRequired: true } }),
    providerAccountId: text({ validation: { isRequired: true } }),
    refresh_token: text(),
    access_token: text(),
    expires_at: timestamp(),
    token_type: text(),
    scope: text(),
    id_token: text(),
    session_state: text(),
    refresh_token_expires_at: timestamp(),
  }
})
