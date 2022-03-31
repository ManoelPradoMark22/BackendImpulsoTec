a = window.prompt("Digite o número inteiro A: ");
b = window.prompt("Digite o número inteiro B: ");

document.write("A: " + a + "<br>");
document.write("B: " + b + "<br>");

/*
a = parseInt(window.prompt("Digite o número inteiro A: "));
b = parseInt(window.prompt("Digite o número inteiro B: "));

document.write("A: " + a + "<br>");
document.write("B: " + b + "<br>");

document.write("*********** <br>");

a = parseFloat(window.prompt("Digite o número real A: "));
b = parseFloat(window.prompt("Digite o número real B: "));

document.write("A: " + a + "<br>");
document.write("B: " + b + "<br>");
*/

/* 
a = window.prompt("Digite o número A: ");

if (a>0) {
  //Então (entra aqui se a sentença for VERDADEIRA, true)
  document.write("O número digitado é positivo!");
} else {
  //SENÃO (entra aqui se a sentença for FALSA, false)
  document.write("O número digitado é não positivo");
}
*/

/* 
a = parseFloat(window.prompt("Digite o número A: "));

//dessa forma
if (a>0) {
  //Então (entra aqui se a sentença for VERDADEIRA, true)
  document.write("O número digitado é positivo!");
} else if(a<0) {
  //Então (entra aqui se a sentença for VERDADEIRA, true)
  document.write("O número digitado é negativo!");
} else {
  //SENÃO (entra aqui se a sentença for FALSA, false)
  document.write("O número digitado é nulo!");
}
*/

//dessa forma também
/* 
if (a>0) {
  //Então (entra aqui se a sentença for VERDADEIRA, true)
  document.write("O número digitado é positivo!");
} else {
  if(a<0) {
    //Então (entra aqui se a sentença for VERDADEIRA, true)
    document.write("O número digitado é negativo!");
  } else {
    //SENÃO (entra aqui se a sentença for FALSA, false)
    document.write("O número digitado é nulo!");
  }
}
*/

/**
 NÚMERO PAR -> RESTO DA DIVISÃO POR 2 = = 0
 NÚMERO ÍMPAR -> RESTO DA DIVISÃO POR 2 = = 1
 */

/*
a = parseInt(window.prompt("Digite um núm Inteiro: "));

restoDivPor2 = a%2;

document.write(a + "%2 = " + restoDivPor2 + "<br>");

if ( (restoDivPor2) == 0 ) {
  //Então (entra aqui se a sentença for VERDADEIRA, true)
  document.write("O número " + a + " é par");
} else {
  //SENÃO (entra aqui se a sentença for FALSA, false)
  document.write("O número " + a + " é ímpar");
}
*/
