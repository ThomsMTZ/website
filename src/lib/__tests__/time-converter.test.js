import { timeConverter } from '@/lib/time-converter';

describe('timeConverter', () => {
  beforeAll(() => {
    // Mock Date.now() to return a consistent timestamp for testing
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-01-15T12:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should return seconds ago for time less than 60 seconds', () => {
    const thirtySecondsAgo = new Date('2024-01-15T11:59:30Z').toISOString();
    expect(timeConverter(thirtySecondsAgo)).toBe('30 seconds ago');
  });

  test('should return minutes ago for time less than 60 minutes', () => {
    const thirtyMinutesAgo = new Date('2024-01-15T11:30:00Z').toISOString();
    expect(timeConverter(thirtyMinutesAgo)).toBe('30 minutes ago');
  });

  test('should return hours ago for time less than 24 hours', () => {
    const fiveHoursAgo = new Date('2024-01-15T07:00:00Z').toISOString();
    expect(timeConverter(fiveHoursAgo)).toBe('5 hours ago');
  });

  test('should return days ago for time less than 30 days', () => {
    const tenDaysAgo = new Date('2024-01-05T12:00:00Z').toISOString();
    expect(timeConverter(tenDaysAgo)).toBe('10 days ago');
  });

  test('should return months ago for time less than 12 months', () => {
    const sixMonthsAgo = new Date('2023-07-15T12:00:00Z').toISOString();
    expect(timeConverter(sixMonthsAgo)).toBe('6 months ago');
  });

  test('should return years ago for time more than 12 months', () => {
    const twoYearsAgo = new Date('2022-01-15T12:00:00Z').toISOString();
    expect(timeConverter(twoYearsAgo)).toBe('2 years ago');
  });

  test('should handle edge case of exactly 1 minute', () => {
    const oneMinuteAgo = new Date('2024-01-15T11:59:00Z').toISOString();
    expect(timeConverter(oneMinuteAgo)).toBe('1 minutes ago');
  });

  test('should handle edge case of exactly 1 hour', () => {
    const oneHourAgo = new Date('2024-01-15T11:00:00Z').toISOString();
    expect(timeConverter(oneHourAgo)).toBe('1 hours ago');
  });

  test('should handle edge case of exactly 1 day', () => {
    const oneDayAgo = new Date('2024-01-14T12:00:00Z').toISOString();
    expect(timeConverter(oneDayAgo)).toBe('1 days ago');
  });
});
