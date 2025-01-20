const numero = parseFloat(prompt('Digite um numero POSITIVO, NEGATIVO OU ZERO'));
let sinal = 'NEUTRO';

if (numero > 0) {
  sinal = 'POSITIVO';
} else if (numero < 0) {
  sinal = 'NEGATIVO';
}

console.log(`O número "${numero}" é ${sinal}`);
