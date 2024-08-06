import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship, timestamp } from '@keystone-6/core/fields'

export const TeamSchema = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text(),
    members: relationship({ ref: 'TeamMember.team', many: true }),
    events: relationship({ ref: 'Event.team', many: true }),
    subscription: relationship({ ref: 'Subscription.team', many: false }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
  }
})
