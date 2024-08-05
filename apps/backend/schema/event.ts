import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { integer, relationship, select, text, timestamp } from "@keystone-6/core/fields";

export const EventSchema = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    startsAt: text({ validation: { isRequired: true } }),
    endsAt: text({ validation: { isRequired: true } }),
    type: select({
      options: [
        'wedding',
        'birthday',
        'conference',
        'meetup',
        'party',
      ]
    }),
    location: text(),
    createdBy: relationship({ ref: 'User.events', many: false }),
    team: relationship({ ref: 'Team.events', many: false }),
    publishedAt: timestamp(),
    createdAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
    updatedAt: timestamp({
      db: {
        updatedAt: true
      }
    })
  }
})
