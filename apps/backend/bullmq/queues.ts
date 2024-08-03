import { Queue } from 'bullmq'
import { redis } from '../redis'

export const QUEUES = {
  default: 'default',
}

export const defaultQueue = new Queue(QUEUES.default, {
  connection: redis
})
