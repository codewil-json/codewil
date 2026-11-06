import emailjs from '@emailjs/browser';

const serviceId = process.env.VUE_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.VUE_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.VUE_APP_EMAILJS_PUBLIC_KEY;
const recipient = process.env.VUE_APP_EMAILJS_RECIPIENT;

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(contact: ContactMessage) {
  if (!serviceId || !templateId || !publicKey || !recipient) {
    throw new Error('A configuração do EmailJS está incompleta.');
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: recipient,
      from_name: contact.name,
      reply_to: contact.email,
      message: contact.message,
    },
    { publicKey },
  );
}
