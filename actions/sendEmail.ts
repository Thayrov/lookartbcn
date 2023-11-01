'use client';

import { getErrorMessage, validateString } from '@/lib/utils';

import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';
import { Resend } from 'resend';

console.log('🚀 ~ file: sendEmail.ts:10 ~ RESEND_API_KEY:', process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);
console.log('🚀 ~ file: sendEmail.ts:10 ~ resend:', resend);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Email inválido',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Mensaje inválido',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'thayrovg@gmail.com',
      subject: 'Mensaje desde formulario de contacto',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
