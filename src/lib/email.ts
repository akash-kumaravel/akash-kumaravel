import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_6nc5he7';
const EMAILJS_TEMPLATE_ID = 'template_8xd1e6c';
const EMAILJS_PUBLIC_KEY = 'Lfma5qv201YkcYZtM';

export interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(params: SendEmailParams) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: params.name,
      from_email: params.email,
      name: params.name,
      email: params.email,
      reply_to: params.email,
      message: params.message,
    },
    EMAILJS_PUBLIC_KEY
  );
}
