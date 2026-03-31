import { EMAIL_RE, MAX_MESSAGE_LEN, MAX_NAME_LEN, countDigits } from './validation/common';

export type InquiryFormState = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

export type InquiryFieldErrors = Partial<Record<keyof InquiryFormState, string>>;

export type SanitizedInquiryPayload = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

export type ValidateInquiryOptions = {
  /** When true, message must be non-empty and meet min length (default: true). */
  requireMessage?: boolean;
  /** Used when message is required, or when optional but non-empty (default: 10). */
  minMessageLength?: number;
};

export function inquiryInputClass(hasError: boolean): string {
  return `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
    hasError ? 'border-red-500' : 'border-gray-300'
  }`;
}

export function validateInquiryForm(
  data: InquiryFormState,
  options?: ValidateInquiryOptions
): { valid: boolean; errors: InquiryFieldErrors; sanitized?: SanitizedInquiryPayload } {
  const requireMessage = options?.requireMessage ?? true;
  const minMessageLength = options?.minMessageLength ?? 10;
  const errors: InquiryFieldErrors = {};

  const name = data.name.trim();
  if (name.length < 2) {
    errors.name = 'Enter at least 2 characters.';
  } else if (name.length > MAX_NAME_LEN) {
    errors.name = `Must be at most ${MAX_NAME_LEN} characters.`;
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

  const message = data.message.trim();
  if (requireMessage) {
    if (!message) {
      errors.message = 'Message is required.';
    } else if (message.length < minMessageLength) {
      errors.message = `Message must be at least ${minMessageLength} characters.`;
    } else if (message.length > MAX_MESSAGE_LEN) {
      errors.message = `Message must be at most ${MAX_MESSAGE_LEN} characters.`;
    }
  } else {
    if (message.length > 0 && message.length < minMessageLength) {
      errors.message = `If provided, message must be at least ${minMessageLength} characters.`;
    } else if (message.length > MAX_MESSAGE_LEN) {
      errors.message = `Message must be at most ${MAX_MESSAGE_LEN} characters.`;
    }
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    sanitized: {
      name,
      email,
      mobile,
      message,
    },
  };
}
