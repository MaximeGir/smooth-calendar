import { assert } from 'chai';
import { ICalendarComponent } from "../interface/ICalendarComponent";
import { CalendarComponent } from './../components/CalendarComponent';

const calendar: ICalendarComponent = new CalendarComponent();
describe("CalendarComponent", () => {

  describe("language", () => {

    it("should default to english language", async () => {
      assert.equal(calendar.getLanguage(), 'english');
    });

    it("should set language to french when specified in the constructor", async () => {
      const frenchCalendar: ICalendarComponent = new CalendarComponent('french');
      assert.equal(frenchCalendar.getLanguage(), 'french');
    });

    it("should set language to spanish when specified in the constructor", async () => {
      const spanishCalendar: ICalendarComponent = new CalendarComponent('spanish');
      assert.equal(spanishCalendar.getLanguage(), 'spanish');
    });

    it("should set language to english when specified in the constructor", async () => {
      const englishCalendar: ICalendarComponent = new CalendarComponent('english');
      assert.equal(englishCalendar.getLanguage(), 'english');
    });
  });

  it("should be instance of CalendarComponent", async () => {
    assert.isTrue(calendar instanceof CalendarComponent);
  });

  it("should have months names", async () => {
    assert.isArray(calendar.monthsNames);
  });

  it("should have today's date", async () => {
    const today = new Date();
    assert.isTrue(calendar.today instanceof Date);
    assert.equal(calendar.today.getFullYear(), today.getFullYear());
    assert.equal(calendar.today.getHours(), 0);
    assert.equal(calendar.today.getMinutes(), 0);
    assert.equal(calendar.today.getHours(), 0);
  });

  it("should create date without time", async () => {
    const date = calendar.createDate(2018, 11, 32);
    assert.isTrue(date instanceof Date);
    assert.equal(date.getFullYear(), 2019);
    assert.equal(date.getMonth(), 0);
    assert.equal(date.getDate(), 1);
    assert.equal(date.getMinutes(), 0);
    assert.equal(date.getHours(), 0);
  });

  it("should get days in month", async () => {
    assert.equal(calendar.getDaysInMonth(2018, 4), 31);
    assert.equal(calendar.getDaysInMonth(2018, 8), 30);
    // non-leap year
    assert.equal(calendar.getDaysInMonth(2009, 1), 28);
    // leap year
    assert.equal(calendar.getDaysInMonth(2008, 1), 29);
  });

  it("should get months names in french when language specified in constructor is french", async () => {

    const frenchCalendar: ICalendarComponent = new CalendarComponent('french');

    const janvier = frenchCalendar.getMonthName(0);
    const fevrier = frenchCalendar.getMonthName(1);
    const mars = frenchCalendar.getMonthName(2);
    const avril = frenchCalendar.getMonthName(3);
    const mai = frenchCalendar.getMonthName(4);
    const juin = frenchCalendar.getMonthName(5);
    const juillet = frenchCalendar.getMonthName(6);
    const aout = frenchCalendar.getMonthName(7);
    const septembre = frenchCalendar.getMonthName(8);
    const octobre = frenchCalendar.getMonthName(9);
    const novembre = frenchCalendar.getMonthName(10);
    const decembre = frenchCalendar.getMonthName(11);

    assert.equal(janvier, "Janvier");
    assert.equal(fevrier, "Février");
    assert.equal(mars, "Mars");
    assert.equal(avril, "Avril");
    assert.equal(mai, "Mai");
    assert.equal(juin, "Juin");
    assert.equal(juillet, "Juillet");
    assert.equal(aout, "Août");
    assert.equal(septembre, "Septembre");
    assert.equal(octobre, "Octobre");
    assert.equal(novembre, "Novembre");
    assert.equal(decembre, "Décembre");

    assert.deepEqual(frenchCalendar.monthsNames, [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ]);
  });

  it("should get months name in spanish when language specified in constructor is spanish", async () => {
    const spanishCalendar: ICalendarComponent = new CalendarComponent("spanish");

    const enero = spanishCalendar.getMonthName(0);
    const febrero = spanishCalendar.getMonthName(1);
    const marzo = spanishCalendar.getMonthName(2);
    const abril = spanishCalendar.getMonthName(3);
    const mayo = spanishCalendar.getMonthName(4);
    const junio = spanishCalendar.getMonthName(5);
    const julio = spanishCalendar.getMonthName(6);
    const agosto = spanishCalendar.getMonthName(7);
    const septiembre = spanishCalendar.getMonthName(8);
    const octubre = spanishCalendar.getMonthName(9);
    const noviembre = spanishCalendar.getMonthName(10);
    const diciembre = spanishCalendar.getMonthName(11);

    assert.equal(enero, "Enero");
    assert.equal(febrero, "Febrero");
    assert.equal(marzo, "Marzo");
    assert.equal(abril, "Abril");
    assert.equal(mayo, "Mayo");
    assert.equal(junio, "Junio");
    assert.equal(julio, "Julio");
    assert.equal(agosto, "Agosto");
    assert.equal(septiembre, "Septiembre");
    assert.equal(octubre, "Octubre");
    assert.equal(noviembre, "Noviembre");
    assert.equal(diciembre, "Diciembre");

    assert.deepEqual(spanishCalendar.monthsNames, [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ]);
  });

  it("should get months name in english when language specified in constructor is english", async () => {
    // by default => english
    const january = calendar.getMonthName(0);
    const february = calendar.getMonthName(1);
    const march = calendar.getMonthName(2);
    const april = calendar.getMonthName(3);
    const may = calendar.getMonthName(4);
    const june = calendar.getMonthName(5);
    const july = calendar.getMonthName(6);
    const august = calendar.getMonthName(7);
    const septembre = calendar.getMonthName(8);
    const octobre = calendar.getMonthName(9);
    const novembre = calendar.getMonthName(10);
    const decembre = calendar.getMonthName(11);

    assert.equal(january, "January");
    assert.equal(february, "February");
    assert.equal(march, "March");
    assert.equal(april, "April");
    assert.equal(may, "May");
    assert.equal(june, "June");
    assert.equal(july, "July");
    assert.equal(august, "August");
    assert.equal(septembre, "September");
    assert.equal(octobre, "October");
    assert.equal(novembre, "November");
    assert.equal(decembre, "December");

    assert.deepEqual(calendar.monthsNames, [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]);
  });

  it("should return french days names", async () => {
    const frenchCalendar: ICalendarComponent = new CalendarComponent("french");

    const dimanche = frenchCalendar.getDayName(0);
    const lundi = frenchCalendar.getDayName(1);
    const mardi = frenchCalendar.getDayName(2);
    const mercredi = frenchCalendar.getDayName(3);
    const jeudi = frenchCalendar.getDayName(4);
    const vendredi = frenchCalendar.getDayName(5);
    const samedi = frenchCalendar.getDayName(6);

    assert.equal(dimanche, "Dimanche");
    assert.equal(lundi, "Lundi");
    assert.equal(mardi, "Mardi");
    assert.equal(mercredi, "Mercredi");
    assert.equal(jeudi, "Jeudi");
    assert.equal(vendredi, "Vendredi");
    assert.equal(samedi, "Samedi");

    assert.deepEqual(frenchCalendar.daysNames, [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    ]);
  });

  it("should return spanish days names", async () => {
    const spanishCalendar: ICalendarComponent = new CalendarComponent("spanish");

    const domingo = spanishCalendar.getDayName(0);
    const lunes = spanishCalendar.getDayName(1);
    const martes = spanishCalendar.getDayName(2);
    const miercole = spanishCalendar.getDayName(3);
    const jueves = spanishCalendar.getDayName(4);
    const viernes = spanishCalendar.getDayName(5);
    const sabado = spanishCalendar.getDayName(6);

    assert.equal(domingo, "Domingo");
    assert.equal(lunes, "Lunes");
    assert.equal(martes, "Martes");
    assert.equal(miercole, "Miércoles");
    assert.equal(jueves, "Jueves");
    assert.equal(viernes, "Viernes");
    assert.equal(sabado, "Sábado");

    assert.deepEqual(spanishCalendar.daysNames, [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ]);
  });

  it("should return english days names", async () => {
    // by default => english
    const englishCalendar: ICalendarComponent = new CalendarComponent();

    const sunday = englishCalendar.getDayName(0);
    const monday = englishCalendar.getDayName(1);
    const tuesday = englishCalendar.getDayName(2);
    const wednesday = englishCalendar.getDayName(3);
    const thursday = englishCalendar.getDayName(4);
    const friday = englishCalendar.getDayName(5);
    const saturday = englishCalendar.getDayName(6);

    assert.equal(sunday, "Sunday");
    assert.equal(monday, "Monday");
    assert.equal(tuesday, "Tuesday");
    assert.equal(wednesday, "Wednesday");
    assert.equal(thursday, "Thursday");
    assert.equal(friday, "Friday");
    assert.equal(saturday, "Saturday");

    assert.deepEqual(englishCalendar.daysNames, [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]);
  });
});