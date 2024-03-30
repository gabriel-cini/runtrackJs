var draggedElement = null;

// Fonction pour mélanger les images
function shuffle() {
    var puzzle = document.getElementById("puzzle");
    for (var i = puzzle.children.length; i >= 0; i--) {
        puzzle.appendChild(puzzle.children[Math.random() * i | 0]);
    }
}

// Fonction pour vérifier si les images sont dans le bon ordre
function checkOrder() {
    var puzzle = document.getElementById("puzzle");
    var correctOrder = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
    var currentOrder = Array.from(puzzle.children).map(function (element) {
        return element.id;
    });
    return JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
}

// Fonction pour commencer le drag and drop
function startDrag(event) {
    draggedElement = event.target;
    event.dataTransfer.setData("text", event.target.id);
}

// Fonction pour terminer le drag and drop
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropTarget = event.target;

    if (dropTarget.tagName === "IMG") {
        dropTarget = dropTarget.parentNode;
    }

    if (dropTarget.classList.contains("container")) {
        dropTarget.appendChild(document.getElementById(data));
    }

    if (checkOrder()) {
        document.getElementById("message").innerText = "Vous avez gagné";
        document.getElementById("message").classList.add("message-green");
    } else {
        document.getElementById("message").innerText = "Vous avez perdu";
        document.getElementById("message").classList.add("message-red");
    }

    draggedElement = null;
}

// Fonction pour permettre le drop
function allowDrop(event) {
    event.preventDefault();
}

// Fonction pour gérer le drag and drop
function dragOver(event) {
    if (draggedElement) {
        event.preventDefault();
    }
}