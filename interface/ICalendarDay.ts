import { ICalendarEvent } from './ICalendarEvent';

export interface ICalendarDay {
  className: string,
  id: string,
  day: number,
  date: Date,
  monthIndex: number,
  year: number,
  event: ICalendarEvent
}