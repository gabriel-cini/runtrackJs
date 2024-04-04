document.addEventListener('DOMContentLoaded', (event) => {
    
    const buyButton = document.getElementById('buyButterfly');

    
    buyButton.addEventListener('click', function() {
        alert('Merci de votre achat !');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
   
    const citations = [
        "J'ai vu des choses que vous, humains, ne pourriez pas imaginer.",
        "Des navires de combat en feu sur l'épaule d'Orion.",
        "J'ai vu des rayons C briller dans l'obscurité près de la porte de Tannhäuser.",
        "Tous ces moments se perdront dans le temps... comme des larmes dans la pluie.",
        "Il est temps de mourir."
    ];

    
    const rebootButton = document.getElementById('reboot');

    
    const jumbotronText = document.querySelector('.jumbotron p.lead');

    // Fonction pour obtenir une citation aléatoire
    function getCitationAleatoire() {
        const index = Math.floor(Math.random() * citations.length);
        return citations[index];
    }

    
    rebootButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        
        jumbotronText.textContent = getCitationAleatoire();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.list-group-item');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
           

            listItems.forEach(function(innerItem) {
                innerItem.classList.remove('active');
            });

            
            item.classList.add('active');
        });
    });
});

let keySequence = [];
const requiredSequence = ['d', 'g', 'c'];

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  
  keySequence.push(key);
  if (keySequence.length > 3) {
    keySequence.shift(); 
  }
  
  
  if (keySequence.join('') === requiredSequence.join('')) {
    showModal();
  }
});

function showModal() {
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value; 
  const isChecked = document.getElementById('exampleCheck1').checked ? "Yes" : "No";
  
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `<p>Email: ${email}</p><p>Password: ${password}</p><p>Checked: ${isChecked}</p>`; 
  
  const modal = document.getElementById('infoModal');
  modal.style.display = 'block'; 
}

function closeModal() {
  const modal = document.getElementById('infoModal');
  modal.style.display = 'none'; 
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;

        if (email && password) { 
            changeSpinnerColor(); 
        }
    });
});

function changeSpinnerColor() {
    const spinner = document.getElementById('spinner');
    
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    spinner.style.borderTopColor = randomColor; 
}