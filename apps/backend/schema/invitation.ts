import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { checkbox, relationship, select, text, timestamp } from "@keystone-6/core/fields";

export const InvitationSchema = list({
  access: allowAll,
  fields: {
    event: relationship({ ref: 'Event.invitations', many: false }),
    guest: relationship({ ref: 'Guest.invitations', many: false }),
    sentDate: timestamp(),
    response: select({
      options: [
        { label: 'Accepted', value: 'accepted' },
        { label: 'Declined', value: 'declined' },
        { label: 'Pending', value: 'pending' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    plusOneName: text(),
    plusOneAllowed: checkbox({ defaultValue: false }),
    notes: text(),
    attendance: relationship({ ref: 'GuestAttendance.invitation', many: true }),
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
