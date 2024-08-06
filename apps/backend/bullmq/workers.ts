import { Worker } from 'bullmq';
import { QUEUES } from './queues'
import { redis } from '../redis';
import { sendWelcomeEmailJob } from './jobs'
import { createStripeCustomerWithSubscription } from './jobs/create-stripe-customer-with-subscription';
import { getContext } from '@keystone-6/core/context';
import config from '../keystone'
import * as PrismaModule from '.prisma/client'

const jobs = {
  'send-welcome-email': sendWelcomeEmailJob,
  'create-stripe-customer-with-subscription': createStripeCustomerWithSubscription
}

type Job = {
  name: 'send-welcome-email',
  data: { userId: string }
} | {
  name: 'create-stripe-customer-with-subscription',
  data: { userId: string }
}

export const initializeWorkers = () => {
  console.log('Initializing workers');
  const worker = new Worker(QUEUES.default, async (job: Job) => {
    console.log(job.name, job.data);
    const jobToPerform = jobs[job.name];
    const context = getContext(config, PrismaModule);
    if (!jobToPerform) {
      throw new Error(`Job not found: ${job.name}`);
    }
    return await jobToPerform(context, job.data);
  }, {
    connection: redis,
  })
}
