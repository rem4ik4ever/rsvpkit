import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { checkbox, image, password, relationship, text, timestamp } from "@keystone-6/core/fields";
import { defaultQueue } from '../bullmq'

export const UserSchema = list({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: allowAll,
  hooks: {
    afterOperation: async ({ operation, item }) => {
      if (operation === 'create') {
        defaultQueue.add('send-welcome-email', { userId: item.id })
      }
    }
  },

  // this is the fields for our User list
  fields: {
    // by adding isRequired, we enforce that every User should have a name
    //   if no name is provided, an error will be displayed
    name: text({ validation: { isRequired: true } }),

    email: text({
      validation: { isRequired: true },
      // by adding isIndexed: 'unique', we're saying that no user can have the same
      // email as another user - this may or may not be a good idea for your project
      isIndexed: 'unique',
    }),

    password: password({ validation: { isRequired: true } }),

    sessions: relationship({ ref: 'Session.user', many: true }),

    accounts: relationship({ ref: 'Account.user', many: true }),

    teamMember: relationship({ ref: 'TeamMember.user', many: true }),

    currentTeam: relationship({ ref: 'Team', many: false }),

    events: relationship({ ref: 'Event.createdBy', many: true }),

    emailConfirmedAt: timestamp(),

    avatarUrl: text(),

    createdAt: timestamp({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: 'now' },
    }),

    isAdmin: checkbox({
      defaultValue: false,
      ui: {
        listView: {
          fieldMode: 'hidden'
        },
        createView: {
          fieldMode: "hidden"
        },
        itemView: {
          fieldMode: 'hidden'
        }
      }
    })
  },
})
