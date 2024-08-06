import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

export const SubscriptionSchema = list({
  access: allowAll,
  fields: {
    stripeCustomerId: text(),
    stripeSubscriptionId: text(),
    stripePriceId: text(),
    stripeCurrentPeriodEnd: timestamp(),
    user: relationship({ ref: 'User.subscriptions', many: false }),
    team: relationship({ ref: 'Team.subscription', many: false }),
  }
})
