import { ICalendarOptions } from './../interface/ICalendarOptions';
import { ICalendarComponent } from "../interface/ICalendarComponent";
import { constants } from '../utils/constants';

export class CalendarComponent implements ICalendarComponent {

  private options: ICalendarOptions;
  private monthsNames: string[];
  private daysNames: string[];
  private today: Date;

  constructor(language?: string) {

    const now: Date = new Date();

    this.today = this.createDate(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    this.options = {
      language: constants.languages[language] || constants.languages.english,
      year: this.today.getFullYear(),
      monthIndex: this.today.getMonth(),
      firstDayOfWeek: 0,
      showToday: true,
      previousMonth: null,
      nextMonth: null
    };

    this.monthsNames = constants.monthsNames[this.options.language];
    this.daysNames = constants.daysNames[this.options.language];

  }

  public isWeekend(date: Date): boolean {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  public getMonthName(index: number): string {
    return this.monthsNames[index];
  }

  public getDayName(index: number): string {
    return this.daysNames[index];
  }

  public getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  public buildWeeks(weeksAmount: number): any[][] {
    return null;
  }

  public getWeeksUntilEndOfYear(): number {
    const nextYear: number = this.today.getFullYear() + 1;
    const nextYearDate: Date = new Date(nextYear, 0, 1);

    /**
     * Typescript hack found @https://stackoverflow.com/questions/14980014/how-can-i-calculate-the-time-between-2-dates-in-typescript
     */
    const absoluteWeeks: number = (+nextYearDate - +this.today) / constants.defaults.weekDurationInMillis;

    return Math.ceil(absoluteWeeks);

  }

  public createDate(year: number, month: number, day: number): Date {
    return new Date(year, month, day, 0, 0);
  }

  public getLanguage(): string {
    return this.options.language;
  }
}