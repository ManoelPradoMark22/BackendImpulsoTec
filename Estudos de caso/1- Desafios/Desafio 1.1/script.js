var escolha, num1, num2, resultado, warning = false, divisionByZero = false;

//Se escolher errado, entra na repetição. 
//Só sai da repetição se digitar uma opção válida: 1 ou 2 ou 3 ou 4
do {
  if (!warning) {
    escolha = parseInt(window.prompt("Digite o número que corresponde à operação desejada: 1 - Adição | 2 - Subtração | 3 - Multiplicação | 4 - Divisão"));
  } else {
    escolha = parseInt(window.prompt("Opção Inválida! Digite apenas o número correspondente à operação desejada: 1 - Adição | 2 - Subtração | 3 - Multiplicação | 4 - Divisão"));
  }

  warning=true;
} while((escolha<1) || (escolha>4) || (!escolha));

//Se ñ digitar um número válido entra na repetição. Repete até digitar um número válido
do {
  num1 = parseFloat(window.prompt("Digite o primeiro número: "));
} while((!num1) && (!(num1==0)));

//Se ñ digitar um número válido entra na repetição. Repete até digitar um número válido
do {
  if (!divisionByZero) {
    num2 = parseFloat(window.prompt("Digite o segundo número: "));
  } else {
    num2 = parseFloat(window.prompt("Impossível Divisão por Zero! Digite o segundo número novamente (diferente de zero): "));
  }

  if ((escolha==4) && (num2==0)){
    divisionByZero = true;
  } else {
    divisionByZero = false;
  }

} while(((!num2) && (!(num2==0))) || divisionByZero);

document.write("("+num1+")");

if (escolha==1) {
  document.write("+");
  resultado = num1 + num2;
} else if (escolha==2) {
  document.write("-");
  resultado = num1 - num2;
} else if (escolha==3) {
  document.write("*");
  resultado = num1 * num2;
} else if (escolha==4) {
  document.write("/");
  resultado = num1 / num2;
}

document.write("("+num2+")" + " = " + resultado);
