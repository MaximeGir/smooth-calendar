export interface ICalendarComponent {
  isWeekend(date: Date): boolean;
  getMonthName(index: number): string;
  getDayName(index: number): string;
  getDaysInMonth(year: number, month: number): number;
  buildWeeks(weeksAmount: number): any[][];
  getWeeksUntilEndOfYear(): number;
  createDate(year: number, month: number, day: number): Date
  getLanguage(): string;
}