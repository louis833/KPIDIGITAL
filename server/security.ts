import validator from 'validator';

// HTML escape to prevent XSS attacks in emails
export function escapeHtml(unsafe: string | null | undefined): string {
  if (typeof unsafe !== 'string') return '';

  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Sanitize and validate email
export function sanitizeEmail(email: string | null | undefined): string | null {
  if (!email || typeof email !== 'string') return null;

  const trimmed = email.trim().toLowerCase();

  if (!validator.isEmail(trimmed)) {
    return null;
  }

  // Additional check for length
  if (trimmed.length > 254) return null;

  return trimmed;
}

// Sanitize text input with length limit
export function sanitizeText(text: string | null | undefined, maxLength: number = 1000): string {
  if (!text || typeof text !== 'string') return '';

  const trimmed = text.trim();

  // Limit length
  if (trimmed.length > maxLength) {
    return trimmed.substring(0, maxLength);
  }

  return trimmed;
}

// Validate and sanitize name (letters, spaces, hyphens, apostrophes only)
export function sanitizeName(name: string | null | undefined, maxLength: number = 100): string | null {
  if (!name || typeof name !== 'string') return null;

  const trimmed = name.trim();

  // Check length
  if (trimmed.length < 1 || trimmed.length > maxLength) return null;

  // Allow only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(trimmed)) return null;

  return trimmed;
}

// Validate calculator type
export function validateCalculatorType(type: string): string | null {
  const validTypes = ['clarity', 'systems', 'growth'];

  if (!type || typeof type !== 'string') return null;

  const trimmed = type.trim().toLowerCase();

  if (!validTypes.includes(trimmed)) return null;

  return trimmed;
}

// Sanitize numeric score
export function sanitizeScore(score: any): number | null {
  const num = Number(score);

  if (isNaN(num) || !isFinite(num) || num < 0) return null;

  return Math.floor(num);
}

// Validate tier name
export function validateTierName(tierName: string): string | null {
  if (!tierName || typeof tierName !== 'string') return null;

  const trimmed = tierName.trim();

  // Tier names should be reasonable length
  if (trimmed.length < 1 || trimmed.length > 100) return null;

  return trimmed;
}
