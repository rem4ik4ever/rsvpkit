import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

export const LocationSchema = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    address: text(),
    city: text(),
    state: text(),
    zipCode: text(),
    country: text(),
    contactInfo: text(),
    events: relationship({ ref: 'Event.location', many: true }),
    stages: relationship({ ref: 'EventStage.location', many: true }),
    team: relationship({ ref: 'Team.locations', many: false }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
    updatedAt: timestamp({
      db: {
        updatedAt: true
      }
    })
  }
});
