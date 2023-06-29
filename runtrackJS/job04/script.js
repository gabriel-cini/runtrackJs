document.addEventListener("DOMContentLoaded", function () {
    var annee = new Date().getFullYear();
    function bisextile(annee) {
      if (annee % 4 === 0 && annee % 100 != 0 && annee % 400 === 0) {
        document.getElementById("annee").textContent = annee + " est bisextile";
        return true;
      } else {
        document.getElementById("annee").textContent =
          annee + " n'est pas bisextile";
        return false;
      }
    }
    bisextile(annee);
  });