// Para esta tarefa reescreva o código da aula anterior,
// mas inserindo uma linha divisória sempre que mudar a dezena.
// Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.
// Dica: para escrever uma linha horizontal, use a tag <hr>
let numero = prompt("Digite um número");
numero = parseFloat(numero);

let indice = 0;

while (indice <= 1000) {
  document.write(numero + " x " + indice + " = " + numero * indice + "<br>");

  if (indice % 10 === 0 && indice > 0) {
    document.write("<hr>");
  }

  indice++;
}
