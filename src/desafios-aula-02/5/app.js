const nomeUsuario = prompt('Qual é o seu nome?');

if (nomeUsuario === null || nomeUsuario === '') {
  alert('Nome inválido');
} else {
  alert(`Seja bem-vindo(a) ${nomeUsuario}!`);
}
