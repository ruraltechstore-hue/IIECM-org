export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_NAME_LEN = 200;
export const MAX_MESSAGE_LEN = 5000;

export function countDigits(s: string): number {
  return s.replace(/\D/g, '').length;
}
