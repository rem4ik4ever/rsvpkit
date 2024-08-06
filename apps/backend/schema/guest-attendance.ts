import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { checkbox, relationship, timestamp } from "@keystone-6/core/fields";

export const GuestAttendanceSchema = list({
  access: allowAll,
  fields: {
    invitation: relationship({ ref: 'Invitation.attendance', many: false }),
    stage: relationship({ ref: 'EventStage.attendance', many: false }),
    attending: checkbox({ defaultValue: false }),
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
