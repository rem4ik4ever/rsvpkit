import { sendEmail } from '../../email'
import { Context } from '.keystone/types'

export const sendWelcomeEmailJob = async (context: Context, { userId }: { userId: string }) => {
  console.log('Sending welcome email to user', userId);
  await sendEmail({
    to: "rem@rsvpkit.co",
    from: "jaleel57@ethereal.email",
    subject: "Welcome to RSVP Kit",
    template: 'welcome',
    data: {
      userId,
    }
  })
}
