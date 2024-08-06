import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { integer, json, relationship, text, timestamp } from "@keystone-6/core/fields";

export const EventStageSchema = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    event: relationship({ ref: 'Event.stages', many: false }),
    location: json(),
    stageDate: timestamp({ validation: { isRequired: true } }),
    startTime: text({ validation: { isRequired: true } }),
    endTime: text({ validation: { isRequired: true } }),
    description: text(),
    capacity: integer(),
    createdAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
    updatedAt: timestamp({
      db: {
        updatedAt: true
      }
    }),
    attendance: relationship({ ref: 'GuestAttendance.stage', many: true }),
  }
});
