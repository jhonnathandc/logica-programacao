//fazer jogador1 digitar um numero
let j1 = prompt("Jogador 1 digite um número");

//fazer jogador2 digitar outro numero
let j2 = prompt("Jogador 2 digite um número");

//se forem iguais, mostrar mensagem 'empate'
if (j1 === j2) {
  alert("Aconteceu um empate!");
}

//sortear um numero entre 0 e 1
else {
  let sorteio = parseInt(Math.random() * 2);

  // se o numero sorteado for 0, ganha quem escolher o numero MENOR
  if (sorteio === 0) {
    if (j1 < j2) {
      alert("Número sorteado foi " + sorteio + ". Jogador 1 ganhou.");
    } else {
      alert("Número sorteado foi " + sorteio + ". Jogador 2 ganhou.");
    }
  }

  //se o numero sorteado for 1, ganha quem escolher o numero MAIOR
  else {
    if (j1 > j2) {
      alert("Número sorteado foi " + sorteio + ". Jogador 1 ganhou.");
    } else {
      alert("Número sorteado foi " + sorteio + ". Jogador 2 ganhou.");
    }
  }
}
