document.addEventListener("DOMContentLoaded", function () {
    function afficherjourssemaines() {
      const jourssemaines = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ];
      for (let x = 0; x < jourssemaines.length; x++) {
        console.log(jourssemaines[x]);
      }
    }
    afficherjourssemaines();
  });