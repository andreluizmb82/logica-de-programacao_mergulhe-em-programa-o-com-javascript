const numero = parseFloat(prompt('Digite um numero POSITIVO, NEGATIVO OU NEUTRO'));
let sinal = 'NEUTRO';

if (numero > 0) {
  sinal = 'POSITIVO';
} else if (numero < 0) {
  sinal = 'NEGATIVO';
}

alert(`O número "${numero}" é ${sinal}`);
