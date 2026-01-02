'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  name: string,
  email: string,
  message: string,
  subject: string
) => {
  await resend.emails.send({
    to: 'dharison05@gmail.com',
    from: `${name} <onboarding@resend.dev>`,
    subject: `${subject}`,
    text: `From: ${email} \n ${message}`,
  });
};
