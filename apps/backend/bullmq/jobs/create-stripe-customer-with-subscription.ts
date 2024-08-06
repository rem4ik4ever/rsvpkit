import { Context } from '.keystone/types'
import { createStripeCustomer } from '../../lib/stripe'

export const createStripeCustomerWithSubscription = async (context: Context, { userId }: { userId: string }) => {
  return createStripeCustomer(context, userId)
}
