//VETOR
/*
vetorInfo = ["o nome", "a idade", "a altura", "o sexo"];

cadastro2 = new Array();

for(x=0; x<4; x++) {
  cadastro2[x] = window.prompt("Digite " + vetorInfo[x] + ": ");
}
document.write(cadastro2+"<br>");
*/



document.write("<br><br>******************************")




//MATRIZ
document.write("<br><br>--MATRIZ--<br><br>");

vetorInfo = ["o nome", "a idade", "a altura", "o sexo"];

matrizFuncionarios2 = new Array();
for(l=0; l<3; l++) {
  matrizFuncionarios2[l] = new Array();
}

for(l=0; l<3; l++) {
  for(c=0; c<4; c++) {
    matrizFuncionarios2[l][c] = window.prompt("Funcionário "+(l+1)+", digite " + vetorInfo[c] + ": ");
  }
  document.write(l + " [" + (l+1) + "º Funcionário(a)]: " + matrizFuncionarios2[l] + "<br>");
}
document.write(matrizFuncionarios2);