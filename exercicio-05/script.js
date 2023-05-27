/* 
  Para esse exercício, tente reescrever a lógica que fizemos em um exercício anterior,
  de modo a torná-la mais curta. 
  Essa tarefa tem por objetivo te fazer pensar em como solucionar MELHOR um problema. 
  Não tem resposta certa ou errada aqui. 
  Cada pessoa pode pensar em maneiras diferentes de resolver o mesmo problema. 
  O que vale aqui é exercitar sua lógica.
*/

// fazer jogador1 digitar um numero
var nJogador1 = parseInt(prompt("numero do jogador 1"));

// fazer jogador2 digitar outro numero
var nJogador2 = parseInt(prompt("numero do jogador 2"));

// se forem iguais, mostrar mensagem 'empate'
if (nJogador1 === nJogador2) {
  // sortear um numero entre 0 e 1
  alert("voces empataram");
} else {
  // se o numero sorteado for 0, ganha quem escolher o numero MENOR
  // se o numero sorteado for 1, ganha quem escolher o numero MAIOR
  var nSorteado = parseInt(Math.random() * 2);
  if (
    (nSorteado === 0 && nJogador1 < nJogador2) ||
    (nSorteado === 1 && nJogador1 > nJogador2)
  ) {
    alert("número sorteado" + nSorteado);
    alert("ganhou o jogador 1...");
  } else {
    alert("número sorteado" + nSorteado);
    alert("ganhou o jogador 2...");
  }
}
