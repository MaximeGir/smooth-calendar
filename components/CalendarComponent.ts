import { ICalendarComponent } from '../interface/ICalendarComponent';
import { constants } from '../utils/constants';
import { ICalendarDay } from './../interface/ICalendarDay';
import { ICalendarOptions } from './../interface/ICalendarOptions';

export class CalendarComponent implements ICalendarComponent {

  private options: ICalendarOptions;
  public monthsNames: string[];
  public daysNames: string[];
  public today: Date;
  public weeks: ICalendarDay[][];

  constructor(options?: ICalendarOptions) {

    if (!options) {
      options = { language: 'english' };
    } else if (!options.language) {
      options.language = constants.languages.english;
    }

    this.monthsNames = constants.monthsNames[options.language];
    this.daysNames = constants.daysNames[options.language];

    const now: Date = new Date();

    this.today = this.createDate(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );


    let defaults: ICalendarOptions = {
      language: constants.languages[options.language],
      year: this.today.getFullYear(),
      monthIndex: this.today.getMonth(),
      firstDayOfWeek: options.firstDayOfWeek || 0,
      showToday: true,
      previousMonth: this.getMonthName(this.today.getMonth() - 1),
      nextMonth: this.getMonthName(this.today.getMonth() + 1),
      nbWeeks: constants.defaults.numberOfWeeks
    };

    this.options = Object.assign({}, defaults, options);
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

  public buildWeeks(weeksAmount?: number): ICalendarDay[][] {

    // TODO refactor !!

    let classNames;
    let date;
    let day;
    let i = 1;
    let week;
    let options = this.options;

    this.weeks = [];

    let firstDate = this.createDate(options.year, options.monthIndex, 1);
    let monthDays = this.getDaysInMonth(options.year, options.monthIndex);
    let firstDateIndex = firstDate.getDay();

    const weekCount: number = weeksAmount || this.options.nbWeeks;
    // Loop through week indexes (0..6)
    for (let w = 0; w < weekCount; w++) {
      week = [];
      let { firstDayOfWeek } = this.options;

      // Loop through the day index (0..6) for each week.
      for (let d = firstDayOfWeek; d < firstDayOfWeek + 7; d++) {
        classNames = [];
        day = {};

        if (w === 0 && d < firstDateIndex) {
          // Day of Previous Month
          date = this.createDate(
            firstDate.getFullYear(),
            firstDate.getMonth(),
            1 - (firstDateIndex - d)
          );
        } else if (i > monthDays) {
          // Day of Next Month
          date = this.createDate(
            firstDate.getFullYear(),
            firstDate.getMonth(),
            i
          );
          i += 1;
        } else {
          // Day of Current Month
          classNames.push("month-day");
          date = this.createDate(
            firstDate.getFullYear(),
            firstDate.getMonth(),
            i
          );

          i += 1;

          if (
            options.showToday &&
            date.toDateString() === this.today.toDateString()
          ) {
            classNames.push("today");
          }
        }

        if (date && date.getDate) {
          if (this.isWeekend(date)) {
            classNames.push("weekend-day");
          }

          day.className = classNames.join(" ");
          day.id = "day" + date.getTime();
          day.day = date.getDate();
          day.date = date;
          day.monthIndex = date.getMonth();
          day.year = date.getFullYear();

          date = undefined;
        } else {
          day = { date: null, day: null };
        }

        week.push(day);
      }

      this.weeks.push(week);
    }
    return this.weeks;
  }

  public getWeeksUntilEndOfYear(date: Date): number {
    const nextYear: number = date.getFullYear() + 1;
    const nextYearDate: Date = new Date(nextYear, 0, 1);

    /**
     * Typescript hack found @https://stackoverflow.com/questions/14980014/how-can-i-calculate-the-time-between-2-dates-in-typescript
     */
    const absoluteWeeks: number = (+nextYearDate - +date) / constants.defaults.weekDurationInMillis;

    return Math.ceil(absoluteWeeks);

  }

  public createDate(year: number, month: number, day: number): Date {
    return new Date(year, month, day, 0, 0);
  }

  public getLanguage(): string {
    return this.options.language;
  }
}