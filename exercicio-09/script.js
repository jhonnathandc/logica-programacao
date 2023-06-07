let numero = prompt("Digite um número");
numero = parseFloat(numero);

escrever();

function escrever() {
  const paragrafo = document.querySelector(".paragrafo");
  paragrafo.innerText = numero;
}

function somar() {
  let numero2 = prompt("Digite um número");
  numero2 = parseFloat(numero2);
  numero += numero2;

  escrever();
}

function subtrair() {
  let numero2 = prompt("Digite um número");
  numero2 = parseFloat(numero2);
  numero -= numero2;

  escrever();
}

function multiplicar() {
  let numero2 = prompt("Digite um número");
  numero2 = parseFloat(numero2);
  numero *= numero2;

  escrever();
}

function dividir() {
  let numero2 = prompt("Digite um número");
  numero2 = parseFloat(numero2);
  numero /= numero2;

  escrever();
}
