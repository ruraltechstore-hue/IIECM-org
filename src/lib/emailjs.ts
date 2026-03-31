import emailjs from '@emailjs/browser';
import { SITE_EMAIL } from '../constants/site';

export type InquiryEmailParams = {
  title: string;
  name: string;
  email: string;
  message: string;
  mobile?: string;
  time?: string;
};

/**
 * Sends via the contact form EmailJS template (`VITE_EMAILJS_TEMPLATE_ID`).
 * Used for Contact, course inquiries, partner applications, etc.
 *
 * Passes `publicKey` on every `send()` so the key is always
 * applied (avoids relying on init/store after HMR or lazy loading).
 *
 * Dashboard: In the EmailJS template, set "To Email" to your inbox (e.g. support@…),
 * not `{{email}}` — otherwise messages go to the visitor, not you. Use `{{email}}` in
 * Reply-To or body instead. Allow localhost / your domain under Account → Security.
 */
export async function sendInquiryNotification(params: InquiryEmailParams): Promise<void> {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();

  if (!publicKey || !serviceId || !templateId) {
    console.warn(
      '[EmailJS] Missing VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, or VITE_EMAILJS_TEMPLATE_ID — notification skipped.'
    );
    return;
  }

  const time = params.time ?? new Date().toLocaleString();
  const message =
    params.mobile != null && params.mobile !== ''
      ? `Phone: ${params.mobile}\n\n${params.message}`
      : params.message;

  const visitorEmail = String(params.email);

  const templateParams: Record<string, string> = {
    title: String(params.title),
    name: String(params.name),
    time,
    message: String(message),
    email: visitorEmail,
    user_email: visitorEmail,
    reply_to: visitorEmail,
    support_email: SITE_EMAIL,
  };

  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}

const INTERNSHIP_STAGE_LABEL: Record<'stage1' | 'stage2' | 'stage3', string> = {
  stage1: 'Stage 1 - Basic (₹1,000)',
  stage2: 'Stage 2 - With AI (₹2,500)',
  stage3: 'Stage 3 - Advanced (Custom Pricing)',
};

export type InternshipEmailParams = {
  institution_name: string;
  contact_person: string;
  email: string;
  mobile: string;
  number_of_students: number;
  preferred_stage: 'stage1' | 'stage2' | 'stage3';
  message: string;
  time?: string;
};

export async function sendInternshipInquiryNotification(params: InternshipEmailParams): Promise<void> {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_INTERNSHIP_TEMPLATE_ID?.trim();

  if (!publicKey || !serviceId || !templateId) {
    console.warn(
      '[EmailJS] Missing VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, or VITE_EMAILJS_INTERNSHIP_TEMPLATE_ID — internship notification skipped.'
    );
    return;
  }

  const time = params.time ?? new Date().toLocaleString();
  const contact = params.contact_person.trim();
  const preferredStageLabel = INTERNSHIP_STAGE_LABEL[params.preferred_stage];

  const templateParams: Record<string, string | number> = {
    title: 'Internship inquiry',
    institution_name: params.institution_name.trim(),
    contact_person: contact,
    name: contact,
    email: params.email.trim(),
    mobile: params.mobile.trim(),
    number_of_students: params.number_of_students,
    preferred_stage: preferredStageLabel,
    message: params.message.trim(),
    time,
  };

  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
