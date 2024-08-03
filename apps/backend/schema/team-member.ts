import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, select, text, timestamp } from "@keystone-6/core/fields";

export const TeamMemberSchema = list({
  access: allowAll,
  fields: {
    user: relationship({ ref: 'User.teamMember', many: false }),
    team: relationship({ ref: 'Team.members', many: false }),
    role: select({
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Admin', value: 'admin' },
        { label: 'Member', value: 'member' }
      ]
    }),
    removedAt: timestamp(),
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
