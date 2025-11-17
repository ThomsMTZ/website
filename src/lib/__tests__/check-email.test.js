import { isValidEmail } from '@/lib/check-email';

describe('isValidEmail', () => {
  test('should return true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@example.com')).toBe(true);
    expect(isValidEmail('user+tag@example.co.uk')).toBe(true);
    expect(isValidEmail('user_name@example-domain.com')).toBe(true);
    expect(isValidEmail('123@example.com')).toBe(true);
  });

  test('should return false for invalid email addresses', () => {
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('invalid@example')).toBe(false);
    expect(isValidEmail('invalid @example.com')).toBe(false);
    expect(isValidEmail('invalid@example .com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  test('should return false for email with spaces', () => {
    expect(isValidEmail(' user@example.com')).toBe(false);
    expect(isValidEmail('user@example.com ')).toBe(false);
    expect(isValidEmail('user @example.com')).toBe(false);
  });

  test('should return false for email without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  test('should return false for email without domain extension', () => {
    expect(isValidEmail('user@example')).toBe(false);
  });

  test('should return false for multiple @ symbols', () => {
    expect(isValidEmail('user@@example.com')).toBe(false);
    expect(isValidEmail('user@example@com')).toBe(false);
  });
});
