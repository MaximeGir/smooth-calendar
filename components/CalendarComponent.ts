import { ICalendarComponent } from "../interface/ICalendarComponent";

export class ExampleComponent implements ICalendarComponent {
  public async exampleOperation(): Promise<string> {
    return "Je suis un chevreuil.";
  }
}