var n1 = prompt("digite um número");
n1 = parseFloat(n1);

var n2 = parseFloat(prompt("digite outro número"));

var media = (n1 + n2) / 2;

if (media <= 5 || n1 === 0 || n2 === 0) {
  alert("Descupe, mas não foi dessa vez");
} else {
  alert("Parabéns! Você foi aprovado");
}
