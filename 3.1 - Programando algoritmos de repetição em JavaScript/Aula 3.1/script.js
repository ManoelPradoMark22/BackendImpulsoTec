//WHILE
document.write("<br><br>WHILE<br><br>");

i=0;
soma = 0;

while (i<5) {
  document.write(i + ", ");
  soma = soma + i;
  i = i + 1;
}

document.write("<br>")
document.write("Soma dos números: " + soma + "<br><br>");












//EXEMPLIFICANDO WHILE
document.write("---------------------------------------<br>EXEMPLIFICANDO WHILE:<br>---------------------------------------<br><br>")

i = 0;
soma = 0;

while(i<5) {
  document.write("while ("+i+"<5){<br>  //("+(i+1)+"ª passagem)<br>  //Valor de i atual = "+ i +"<br>//Valor da soma atual = "+soma+"<br><br>document.write(i + ', ');<br><br> //Atualizando o valor da soma:<br>soma = soma + i;<br>//soma = "+ soma +"+ "+  i +" = "+(soma+i)+"<br><br>  //Atualizando o valor de i:<br>  i = i + 1;<br>  //i = "+i+" + 1 = "+(i+1)+"<br>}<br><br>");
  soma = soma + i;
  i = i + 1;
}

document.write("while(5<5){<br>//NÃO ENTRA NESSE, E O LAÇO DE REPETIÇÃO PARA! POIS A CONDIÇÃO FOI FALSA! 5<5 é falso! O laço de repetição é interrompido.<br>}<br><br>");
document.write("O algoritmo sai do while e segue para as próximas linhas.");

document.write("<br><br><br><br>********************************************<br><br>");










//DO/WHILE
document.write("<br><br>DO/WHILE<br><br>");

i=0;
soma = 0;

do {
  document.write(i + ", ");
  //soma = soma + i;
  i = i + 1;
} while (i<5);

document.write("<br>Soma dos números: " + soma + "<br><br>");


/* 
do {
  escolha = parseInt(window.prompt("Digite: 1 - Cadastro | 2 - Login | 3 - Recuperar Senha"));
} while((escolha<1) || (escolha>3));

document.write("Escolha: " + escolha + "<br><br>");
*/








//EXEMPLIFICANDO DO/WHILE
document.write("--------------------------------------------<br>EXEMPLIFICANDO DO/WHILE:<br>--------------------------------------------<br><br>")
i = 0;
soma = 0;

while(i<5) {
  document.write("do {<br>  //("+(i+1)+"ª passagem)<br>  //Valor de i atual = "+ i +"<br>//Valor da soma atual = "+soma+"<br><br>document.write(i + ', ');<br><br> //Atualizando o valor da soma:<br>soma = soma + i;<br>//soma = "+ soma +"+ "+  i +" = "+(soma+i)+"<br><br>  //Atualizando o valor de i:<br>  i = i + 1;<br>  //i = "+i+" + 1 = "+(i+1)+"<br>} while ("+(i+1)+"<5);<br><br>");
  //soma = soma + i;
  i = i + 1;
}

document.write("A CONDIÇÃO JÁ FOI ANALISADA E FOI VERIFICADO QUE A CONDIÇÃO FOI FALSA!<br>5<5 é falso! O laço de repetição é interrompido! O algoritmo não repete mais o 'do'.<br><br>");
document.write("O algoritmo segue para as próximas linhas.");

document.write("<br><br><br><br>********************************************<br><br>");

//FOR
document.write("<br><br>FOR <br><br>");

soma = 0;

for(x=0; x<5; x++) {
  document.write(x + ", ");  
  //soma = soma + x;
}

document.write("<br>");
//document.write("<br>Soma dos números: " + soma + "<br><br>");












//EXEMPLIFICANDO FOR
document.write("----------------------------------<br>EXEMPLIFICANDO FOR:<br>----------------------------------<br><br>")
soma = 0;

for (x=0; x<5; x++) {
  document.write("for(x="+x+"; "+x+"<5; x++){<br><br>  //("+(x+1)+"ª passagem)<br>  //Valor de X atual = "+ x +"<br>//Valor da soma atual =  "+soma+"<br><br>document.write(x + ', ');<br><br> //Atualizando o valor da soma:<br>soma = soma + x;<br>//soma = "+soma+" + "+ x +" = "+(soma+x)+"<br><br> //Por último, o for incrementa automaticamente o valor de x:<br>  //x++<br>//que é o mesmo de:<br>//x = x + 1;<br>  //x = "+x+" + 1 = "+(x+1)+"<br><br>}<br><br>");
  //soma = soma + x;
}

document.write("for(x=5; 5<5; x++){<br>//NÃO ENTRA NESSE, E O LAÇO DE REPETIÇÃO PARA! POIS A CONDIÇÃO FOI FALSA! 5<5 é falso! O laço de repetição é interrompido.<br>}<br><br>");
document.write("O algoritmo sai do for e segue para as próximas linhas.<br>");


document.write("<br><br><br><br>********************************************<br><br>");
