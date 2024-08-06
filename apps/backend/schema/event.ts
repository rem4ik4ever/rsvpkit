import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { integer, relationship, select, text, timestamp, checkbox, json } from "@keystone-6/core/fields";

export const EventSchema = list({
  access: allowAll,
  hooks: {
    resolveInput: async ({ resolvedData, operation, context }) => {
      if (operation === 'create') {
        resolvedData.createdBy = { connect: { id: context.session.itemId } }
        if (!context.session.data.currentTeamId) throw new Error('missing_team')

        resolvedData.teamId = { connect: { id: context.session.data.currentTeamId } }
        return resolvedData;
      }
    }
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    startsAt: timestamp({ validation: { isRequired: true } }),
    endsAt: timestamp({ validation: { isRequired: true } }),
    type: select({
      options: [
        { label: 'Wedding', value: 'wedding' },
        { label: 'Birthday', value: 'birthday' },
        { label: 'Conference', value: 'conference' },
        { label: 'Meetup', value: 'meetup' },
        { label: 'Party', value: 'party' },
      ],
      ui: {
        displayMode: 'select',
      },
    }),
    location: json(),
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
    }),
    plusOneAllowed: checkbox({ defaultValue: false }),
    capacity: integer(),
    stages: relationship({ ref: 'EventStage.event', many: true }),
    invitations: relationship({ ref: 'Invitation.event', many: true }),
  }
});
