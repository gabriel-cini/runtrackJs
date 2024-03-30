function konamiCode(callback) {
    var input = '';
    var konami = '38384040373937396665'; // Code Konami
    document.addEventListener('keydown', function (e) {
        input += e.keyCode;
        if (input === konami) {
            callback();
            input = '';
        } else if (!konami.startsWith(input)) {
            input = '';
        }
    });
}

// Appliquer les styles de La Plateforme_ lorsqu'on entre le code Konami
konamiCode(function () {
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#ff7f0e';
});

function citation() {
    var citationText = document.getElementById("citation").textContent.trim();
    console.log(citationText);
}