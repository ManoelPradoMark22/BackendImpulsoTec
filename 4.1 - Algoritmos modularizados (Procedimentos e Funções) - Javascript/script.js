
//Procedimento sem parametro
function ProcedimentoSemParametro() {
  alert("Obrigado por informar os dados!");
  document.write("Obrigado por informar os dados!<br>");
}

a = window.prompt("Digite o primeiro número: ");
b = window.prompt("Digite o segundo número: ");

ProcedimentoSemParametro();

c = window.prompt("Digite o primeiro nome: ");
d = window.prompt("Digite o segundo nome: ");

ProcedimentoSemParametro();







/* 
//Procedimento com parametro
function SomaDoisNum(num1, num2) {
 alert("A Soma dos dois números é: " + (num1 + num2));
}

a = parseFloat(window.prompt("Digite o primeiro número: "));
b = parseFloat(window.prompt("Digite o segundo número: "));

SomaDoisNum(a, b);

c = parseFloat(window.prompt("Digite o primeiro número: "));
d = parseFloat(window.prompt("Digite o segundo número: "));

SomaDoisNum(c, d);
*/








/*
//FUNÇÃO SEM PARÂMETRO
function FuncaoSemParametro() {
  return " Obrigado por informar os dados!";
}

a = window.prompt("Digite o primeiro número: ");
b = window.prompt("Digite o segundo número: ");

alert("Números informados com sucesso!" + FuncaoSemParametro());
document.write(FuncaoSemParametro());

c = window.prompt("Digite o primeiro nome: ");
d = window.prompt("Digite o segundo nome: ");

alert("Nomes informados com sucesso!" + FuncaoSemParametro());
document.write(FuncaoSemParametro());

texto = FuncaoSemParametro();
document.write("<br>texto = " + texto);
*/





/*
  //FUNÇÃO COM PARÂMETRO
function Multiplicação(num1, num2) {
  resultado = num1*num2;
  return resultado;
}

a = parseFloat(window.prompt("Digite o primeiro número: "));
b = parseFloat(window.prompt("Digite o segundo número: "));

alert("1º e 2º número inseridos com sucesso! Resultado multiplicação: " + Multiplicação(a, b));

c = parseFloat(window.prompt("Digite o terceiro número: "));
d = parseFloat(window.prompt("Digite o quarto número: "));

alert("3º e 4º número inseridos com sucesso! Resultado multiplicação: " + Multiplicação(c, d));
*/







/*
//FUNÇÃO COM PARÂMETRO - outro exemplo
function CaixaAltaItalico(texto) {
  texto = texto.toUpperCase();
  texto = texto.italics();
  
  return texto;
}

textoUsuario = window.prompt("Escreve um texto: ");

document.write("Texto original: " + textoUsuario + "<br>");
document.write("Texto formatado: " + CaixaAltaItalico(textoUsuario));

textoUsuario = window.prompt("Escreve um segundo texto: ");

document.write("<br>Texto original: " + textoUsuario + "<br>");
document.write("Texto formatado: " + CaixaAltaItalico(textoUsuario));
*/






/*
//PROCEDIMENTO COM PARÂMETRO - outro exemplo
function CaixaAltaItalico(texto) {
  texto = texto.toUpperCase();
  texto = texto.italics();

  document.write("Texto formatado: " + texto);
}

textoUsuario = window.prompt("Escreve um texto: ");

document.write("Texto original: " + textoUsuario + "<br>");
CaixaAltaItalico(textoUsuario);

textoUsuario = window.prompt("Escreve um segundo texto: ");

document.write("<br>Texto original: " + textoUsuario + "<br>");
CaixaAltaItalico(textoUsuario);
 */
