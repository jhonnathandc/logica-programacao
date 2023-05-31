// Para este exercicio aplique a lógica necessário para mostrar os
// anos que são realmente bissextos, respeitando a regra: Os anos
// bissextos são múltiplos de 4, não múltiplos de 100
// (1900 não é bissexto) e múltiplos de 400 (2000 é bissexto).
// (fonte:http://www.ponteiro.com.br/bisse.php)
let ano = 1004;

while (ano <= 2017) {
  if (!(ano % 100 === 0) || ano % 400 === 0) {
    document.write(ano + "<br>");
  } else {
    document.write(ano + " Não é bissexto<br>");
  }

  ano += 4;
}
