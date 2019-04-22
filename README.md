Smooth Calendar
---

Just a node.js calendar library heavily inspired by [json-calendar](https://www.npmjs.com/package/json-calendar).

Currently in development so keep in mind it's a work in progress. More informations to come!

```javascript
const calendar: ICalendarComponent = new CalendarComponent();

// interface definition 

  /**
   * Determine if certain date is a weekend day
   * @param { Date } date
   * @return { boolean } 
   */
  isWeekend(date: Date): boolean;

  /**
   * Get month name from index
   * @param { number } index 
   * @return { string } name of the month
   */
  getMonthName(index: number): string;

  /**
   * Get day name from index
   * @param { number } index 
   * @return { string } name of the day
   */
  getDayName(index: number): string;

  /**
   * Get number of days in month
   * @param { number } year 
   * @param { number } month
   * @return { number } number of days in month
   */
  getDaysInMonth(year: number, month: number): number;

  /**
   * Build weeks as array of custom date objects for specified week amount
   * @param { number } weeksAmount 
   * @return { any [][] } Custom object tbd
    */
  buildWeeks(weeksAmount: number): any[][];

  /**
   * Get amount of weeks before next year (xxxx/01/01)
   * @param { Date } date to compare next year to
   * @return { number } number of weeks until next year 
   */
  getWeeksUntilEndOfYear(date: Date): number;

  /**
   * Create a new Date object at midnight time
   * @param { number } year 
   * @param { number }month 
   * @param { number }day
   * @return { Date } newly created Date 
   */
  createDate(year: number, month: number, day: number): Date

  /**
   * Get calendar language 
   * @return { string } 'french', 'english' or 'spanish'
   */
  getLanguage(): string;
```


