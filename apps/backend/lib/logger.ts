import winston from 'winston';

// Configure winston to log to console and a log provider
export const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    // Add more transports here for your log provider (e.g., Winston transports for services like AWS CloudWatch, Loggly, etc.)
  ],
});
