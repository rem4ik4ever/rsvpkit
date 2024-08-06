import { Context } from '.keystone/types'
import { Router } from 'express'
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import { logger } from '../lib/logger';
import bodyParser from 'body-parser'

export const createStripeRouter = (commonContext: Context) => {
  const router = Router();

  router.post('/', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
    try {
      const body = req.body;
      const signature = req.headers['stripe-signature'] ?? "";

      let event: Stripe.Event;

      try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET ?? "",
        );
      } catch (err: any) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
        //return new Response(
        //  `Webhook Error: ${err instanceof Error ? err.message : "Unknown Error"
        //  }`,
        //  { status: 400 },
        //);
      }
      console.log({
        type: event.type,
        data: event.data.object,
      })
      //const session = event.data.object as Stripe.Checkout.Session;

      // Account updated related events

      // Below handles session related events

      const session = event.data.object as Stripe.Checkout.Session;
      if (event.type === "checkout.session.completed") {

      }

      if (event.type === "invoice.payment_succeeded") {

      }

      //return new Response(null, { status: 200 });
      return res.status(200).send("OK");
    } catch (err) {
      logger.error("Stripe Webhook error", { metadata: err });
    }

  })
  return router;
}
