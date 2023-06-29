document.addEventListener("DOMContentLoaded", function () {
    function jourtravaille(date) {
      const joursFeries = [
        new Date(2020, 0, 1),
        new Date(2020, 3, 13),
        new Date(2020, 4, 1),
        new Date(2020, 4, 8),
        new Date(2020, 4, 21),
        new Date(2020, 5, 1),
        new Date(2020, 6, 14),
        new Date(2020, 7, 15),
        new Date(2020, 10, 1),
        new Date(2020, 10, 11),
        new Date(2020, 10, 25),
      ];
  
      if (
        joursFeries.some(
          (joursFeries) => joursFeries.toDateString() === date.toDateString()
        )
      ) {
        console.log(
          `Le ${date.getDate()} ${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()} est un jour férié.`
        );
      } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(
          `Le ${date.getDate()} ${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()} est un jour de week end`
        );
      } else {
        console.log(
          `Le ${date.getDay()} ${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()} est un jour où l'on travaille`
        );
      }
    }
    const test1 = new Date(2020, 0, 1);
    jourtravaille(test1);
  
    const test2 = new Date(2020, 2, 1);
    jourtravaille(test2);
  
    const test3 = new Date(2020, 0, 3);
    jourtravaille(test3);
  });