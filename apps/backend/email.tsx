import nodemailer from 'nodemailer';
import { render } from '@react-email/components'
import { StripeWelcomeEmail } from '@repo/transactional'

export const emailClient = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'jaleel57@ethereal.email',
    pass: '9QDUBZeHFefBr7fVpX'
  }
});

const TEMPLATES = {
  welcome: StripeWelcomeEmail
}

export const sendEmail = async (params: { to: string, subject: string, from: string, data: Record<string, string>, template: keyof typeof TEMPLATES }) => {
  const { to, subject, data, template, from } = params;
  const Template = TEMPLATES[template];
  if (!template) throw new Error('Email template not found');

  const emailHtml = render(<Template {...data} />);
  console.log({ emailHtml });
  const options = {
    from,
    to,
    subject,
    html: emailHtml
  }
  const result = await emailClient.sendMail(options);
  console.log({ result })
}
