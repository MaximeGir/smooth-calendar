import { ILanguage } from './../interface/ILanguage';

export class Constants {
  get languages(): ILanguage {
    return {
      english: "english",
      french: "french",
      spanish: "spanish"
    };
  }

  get monthsNames(): any {
    return {
      english: [
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
      ],
      french: [
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
      ],
      spanish: [
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
      ]
    };
  }

  get daysNames(): any {
    return {
      english: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      french: [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
      ],
      spanish: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
      ]
    };
  }

  get defaults(): any {
    return {
      numberOfWeeks: 6,
      weekDurationInMillis: 1000 * 60 * 60 * 24 * 7
    };
  }
}

export const constants: Constants = new Constants();