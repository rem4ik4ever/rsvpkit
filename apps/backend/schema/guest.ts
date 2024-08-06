import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

export const GuestSchema = list({
  access: allowAll,
  fields: {
    firstName: text({ validation: { isRequired: true } }),
    lastName: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true } }),
    phone: text(),
    address: text(),
    city: text(),
    state: text(),
    zipCode: text(),
    country: text(),
    invitations: relationship({ ref: 'Invitation.guest', many: true }),
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
