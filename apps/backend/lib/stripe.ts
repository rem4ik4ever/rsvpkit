import { Context } from '.keystone/types';
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
  typescript: true,
});

export const getStripeAccountInfo = async (accountId: string) => {
  const account = await stripe.accounts.retrieve(accountId)
  return account
}

export const createStripeCustomer = async (context: Context, userId: string) => {
  const user = await context.sudo().db.User.findOne({
    where: {
      id: userId
    }
  })
  if (!user) throw new Error("Can't create Stripe customer. User not found")

  const customer = await stripe.customers.create({
    email: user.email,
    name: user.name,
    metadata: {
      userId: user.id,
      orgId: user.currentTeamId
    }
  })

  const stripeSubscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      {
        price: process.env.FREE_PLAN_PRICE_ID
      }
    ]
  })

  const subscription = await context.sudo().db.Subscription.createOne({
    data: {
      user: {
        connect: {
          id: user.id
        }
      },
      team: {
        connect: {
          id: user.currentTeamId
        }
      },
      stripeCustomerId: customer.id,
      stripeSubscriptionId: stripeSubscription.id,
      stripePriceId: stripeSubscription.items.data[0]?.price.id ?? process.env.FREE_PLAN_PRICE_ID
    }
  })

  return {
    customer,
    stripeSubscription,
    subscription
  };
}
