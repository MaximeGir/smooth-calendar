export interface ICalendarComponent {
  isWeekend(): boolean;
  getMonthName(): string;
  getDayName(): string;
}