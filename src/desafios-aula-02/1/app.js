const diaDaSemana = prompt('Digite o dia da semana: ').toLowerCase();
const saudadao = document.getElementById('saudacao');

if (
  diaDaSemana === 'sabado' ||
  diaDaSemana === 'sábado' ||
  diaDaSemana === 'domingo'
) {
  saudadao.innerText = 'Bom fim de semana!';
  // saudadao.innerHTML = "Bom dia!";
} else {
  saudadao.innerText = 'Boa semana!';
}
