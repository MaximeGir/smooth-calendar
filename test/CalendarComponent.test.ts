import { assert } from 'chai';
import { ICalendarComponent } from "../interface/ICalendarComponent";
import { CalenderComponent } from "../components/CalendarComponent";

describe("Example component", () => {
  describe("example operation", () => {
    it("should return a string", async () => {

      const exampleComponent: ICalendarComponent = new CalendarComponent();
      assert.equal(await exampleComponent.exampleOperation(), "Je suis un chevreuil.");

    });
  });
});