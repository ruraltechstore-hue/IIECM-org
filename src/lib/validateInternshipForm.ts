import { EMAIL_RE, MAX_MESSAGE_LEN, MAX_NAME_LEN, countDigits } from './validation/common';

export type InternshipFormState = {
  institution_name: string;
  contact_person: string;
  email: string;
  mobile: string;
  number_of_students: string;
  preferred_stage: 'stage1' | 'stage2' | 'stage3';
  message: string;
};

export type InternshipFieldErrors = Partial<Record<keyof InternshipFormState, string>>;

export type SanitizedInternshipPayload = {
  institution_name: string;
  contact_person: string;
  email: string;
  mobile: string;
  number_of_students: number;
  preferred_stage: 'stage1' | 'stage2' | 'stage3';
  message: string;
};

export function validateInternshipForm(
  data: InternshipFormState
): { valid: boolean; errors: InternshipFieldErrors; sanitized?: SanitizedInternshipPayload } {
  const errors: InternshipFieldErrors = {};

  const institution_name = data.institution_name.trim();
  if (institution_name.length < 2) {
    errors.institution_name = 'Enter at least 2 characters.';
  } else if (institution_name.length > MAX_NAME_LEN) {
    errors.institution_name = `Must be at most ${MAX_NAME_LEN} characters.`;
  }

  const contact_person = data.contact_person.trim();
  if (contact_person.length < 2) {
    errors.contact_person = 'Enter at least 2 characters.';
  } else if (contact_person.length > MAX_NAME_LEN) {
    errors.contact_person = `Must be at most ${MAX_NAME_LEN} characters.`;
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  const mobile = data.mobile.trim();
  if (!mobile) {
    errors.mobile = 'Mobile number is required.';
  } else if (countDigits(mobile) < 10) {
    errors.mobile = 'Enter a valid number with at least 10 digits.';
  }

  const n = parseInt(data.number_of_students.trim(), 10);
  if (data.number_of_students.trim() === '' || Number.isNaN(n)) {
    errors.number_of_students = 'Enter a valid number of students.';
  } else if (n < 1) {
    errors.number_of_students = 'Must be at least 1.';
  } else if (n > 10000) {
    errors.number_of_students = 'Must be at most 10,000.';
  }

  const stages = ['stage1', 'stage2', 'stage3'] as const;
  if (!stages.includes(data.preferred_stage)) {
    errors.preferred_stage = 'Select a valid stage.';
  }

  const message = data.message.trim();
  if (message.length > 0 && message.length < 10) {
    errors.message = 'If provided, message must be at least 10 characters.';
  } else if (message.length > MAX_MESSAGE_LEN) {
    errors.message = `Message must be at most ${MAX_MESSAGE_LEN} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    sanitized: {
      institution_name,
      contact_person,
      email,
      mobile,
      number_of_students: n,
      preferred_stage: data.preferred_stage,
      message,
    },
  };
}
