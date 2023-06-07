let numero1 = prompt("Digite um número");
numero1 = parseFloat(numero1);

escrever();

function escrever() {
  let output = document.getElementById("output");
  output.innerText = numero1;
}

function calcular(tipo) {
  let numero2 = prompt("Digite um número");
  numero2 = parseFloat(numero2);

  switch (tipo) {
    case "+":
      numero1 += numero2;
      break;

    case "-":
      numero1 -= numero2;
      break;

    case "*":
      numero1 *= numero2;
      break;

    case "/":
      numero1 /= numero2;
      break;
  }

  escrever();
}
