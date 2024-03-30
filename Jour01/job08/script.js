function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

function testerSomme() {
    const nombre1 = parseInt(document.getElementById('nombre1').value);
    const nombre2 = parseInt(document.getElementById('nombre2').value);

    const resultat = sommeNombresPremiers(nombre1, nombre2);
    if (resultat !== false) {
        alert("La somme des deux nombres premiers est : " + resultat);
    } else {
        alert("Au moins l'un des nombres n'est pas premier. Veuillez entrer deux nombres premiers.");
    }
}