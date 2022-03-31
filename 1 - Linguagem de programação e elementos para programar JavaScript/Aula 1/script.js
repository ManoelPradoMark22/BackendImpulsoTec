//Explicação no youtube:
// https://youtu.be/rv3yMi5q9ZE

a = 81;
b = 2;

resultadoSoma = a + b;
document.write("O resultado da Soma é: " + resultadoSoma);
document.write("<br>");

resultadoSub = a - b;
document.write("O resultado da Subtração é: " + resultadoSub);
document.write("<br>");

resultadoDiv = a / b;
document.write("O resultado da Divisão é: " + resultadoDiv);
document.write("<br>");

resultadoMult = a * b;
document.write("O resultado da Multiplicação é: " + resultadoMult);
document.write("<br>");

resultadoPot = Math.pow(a , b);
document.write("O resultado da Potenciação é: " + resultadoPot);
document.write("<br>");

resultadoRaiz = Math.sqrt(a);
document.write("O resultado da Raiz Quadrada de " + a + " é: " + resultadoRaiz);
document.write("<br>");

resultadoResto = a % b;
document.write("O resto da divisão de " + a + " por " + b + " é: " + resultadoResto);
document.write("<br>");
document.write("<br>");

document.write("***************************");
document.write("<br>");
document.write("<br>");

//Operadores relacionais

/*
  a>b (maior que)
  a<b (menor que)
  a>=b (maior ou igual)
  a<=b (menor ou igual)
  a==b (verificando se é igual ...... = =)
  a!=b (verificando se é diferente de ......... ! =)
*/

a = 8;
b = 8;
//resultado -> lógico (true ou false)

resultadoOpLogicoMaior = a>b;
document.write("A mesa A é Maior do que a mesa B?: " + resultadoOpLogicoMaior);
document.write("<br>");

resultadoOpLogicoMenor = a<b;
document.write("A mesa A é Menor do que a mesa B?: " + resultadoOpLogicoMenor);
document.write("<br>");

resultadoOpLogicoMaiorOuIgual = a>=b;
document.write("A mesa A é Maior ou Igual do que a mesa B?: " + resultadoOpLogicoMaiorOuIgual);
document.write("<br>");

resultadoOpLogicoMenorOuIgual = a<=b;
document.write("A mesa A é Menor ou Igual do que a mesa B?: " + resultadoOpLogicoMenorOuIgual);
document.write("<br>");

resultadoOpLogicoIgualdade = a==b;
document.write("A mesa A é Igual à mesa B?: " + resultadoOpLogicoIgualdade);
document.write("<br>");

resultadoOpLogicoDiferente = a!=b;
document.write("A mesa A é Diferente da mesa B?: " + resultadoOpLogicoDiferente);
document.write("<br>");
document.write("<br>");

document.write("***************************");
document.write("<br>");
document.write("<br>");

//Operadores Lógicos
/*
  ! (negação)
  && (conjunção) E
  || (disjunção) OU
*/

a = 8;
b = 8;

opcaoCliente = !true;
document.write("resultado negacao: " + opcaoCliente);
document.write("<br>");

sentenca1 = true;
sentenca2 = false;

resultadoConjuncao = sentenca1&&sentenca2;
document.write("Conjuncao: sentenca1(" + sentenca1 + ") && sentenca2(" + sentenca2 + ") : " + resultadoConjuncao);
document.write("<br>");

resultadoDisjuncao = sentenca1||sentenca2;
document.write("Disjunção: sentenca1(" + sentenca1 + ") || sentenca2(" + sentenca2 + ") : " + resultadoDisjuncao);
document.write("<br>");
document.write("<br>");

document.write("***************************");
document.write("<br>");
document.write("<br>");

//Receber dados
a = window.prompt("Digite o valor da variável A: ");
b = window.prompt("Digite o valor da variável B: ");
document.write("Variável A: " + a);
document.write("<br>");
document.write("Variável B: " + b);
document.write("<br>");

resultadoDivisao = a/b;
document.write(a + "/" + b + " = " + resultadoDivisao);

document.write("<br>");
