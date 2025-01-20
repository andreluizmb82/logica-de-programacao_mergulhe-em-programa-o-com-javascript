function tentarSorte() {
  const resultado = document.querySelector('#resultado');
  const pontos = parseInt(Math.random() * 150);

  let textoResultado = '';
  if (pontos > 100) {
    textoResultado = 'Parabéns, você venceu!';
    resultado.className = 'venceu';
  } else {
    textoResultado = `Tente novamente até ganhar!`;
    resultado.className = 'perdeu';
  }

  resultado.innerHTML = `${textoResultado} - Sua pontuação foi de ${pontos} pontos!`;
}
