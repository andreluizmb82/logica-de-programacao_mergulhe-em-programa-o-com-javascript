let maximoInput = document.getElementById('maximoInput');
let msgVitoria = document.getElementById('msgVitoria');
let msgGeral = document.getElementById('msgGeral');
let etiquetaChute = document.getElementById('etiquetaChute');
let inputChute = document.getElementById('inputChute');

let maximoNumeroSecreto = 100;
maximoInput.value = maximoNumeroSecreto;

let numeroSecreto;
let tentativas = 0;

atualizarMaximo();



function verificar(){
  const chute = parseInt(inputChute.value);

  
  if (chute === numeroSecreto) {
    const palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    
    msgVitoria.innerHTML = `Você <span class="container__texto-azul">acertou!</span>`;

    msgGeral.innerHTML = `Isso ai! Você acertou o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`;
    msgGeral.className = 'acertou';

  } else{
    if (chute > numeroSecreto) {
      msgGeral.innerHTML = `O número secreto é <span id="dica">menor</span> que ${chute}.`;
      msgGeral.className = 'menor';
    }else {
      msgGeral.innerHTML = `O número secreto é <span id="dica">maior</span> que ${chute}.`;
      msgGeral.className = 'maior';
    }
    tentativas++;
  }
}

function atualizarMaximo(){
  maximoNumeroSecreto = parseInt(maximoInput.value);
  numeroSecreto = parseInt(Math.random() * maximoNumeroSecreto + 1);
  etiquetaChute.innerText = `Chute um numero de 1 a ${maximoNumeroSecreto}`;
}

// function verificarChute(event) {
//   if (event.key == 'Enter') {
//     alert('teste');
//     verificar();
//   }
// }



inputChute.addEventListener("keypress", verificarChute);

function verificarChute(event) {
  event = event || window.event; // Para compatibilidade com navegadores mais antigos
  let keycode = event.keyCode || event.which; // Obtém o código da tecla

  if (keycode === 13) {
    verificar();
  }
}





