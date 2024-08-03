import { Worker } from 'bullmq';
import { QUEUES } from './queues'
import { redis } from '../redis';
import { sendWelcomeEmailJob } from './jobs'

const jobs = {
  'send-welcome-email': sendWelcomeEmailJob,
}

type Job = {
  name: 'send-welcome-email',
  data: { userId: string }
}

export const initializeWorkers = () => {
  console.log('Initializing workers');
  const worker = new Worker(QUEUES.default, async (job: Job) => {
    console.log(job.name, job.data);
    const jobToPerform = jobs[job.name];
    if (!jobToPerform) {
      throw new Error(`Job not found: ${job.name}`);
    }
    await jobToPerform(job.data);
  }, {
    connection: redis,
  })
}
