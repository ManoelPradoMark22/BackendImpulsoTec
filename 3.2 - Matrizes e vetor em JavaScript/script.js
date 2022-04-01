//VETOR
document.write("--VETOR--<br><br>");

cadastro = new Array();

cadastro = ["Manoel", 15, "Masculino", 60.5];

document.write(cadastro + "<br><br>");

document.write("[");
for(x=0; x<4; x++){
  document.write(cadastro[x], ", ");
}
document.write("]<br><br>");


/*
document.write("[");
for(x=0; x<4; x++){
  if (x==3) {
    document.write(cadastro[x]);
  } else {
    document.write(cadastro[x], ", ");
  }
}
document.write("]<br>");

cadastro2 = new Array();

for(x=0; x<4; x++) {
  cadastro2[x] = window.prompt("Digite o " + (x+1) + "º dado: ");
}
document.write(cadastro2+"<br>");
*/

/*
cadastro3 = new Array();

for(x=0; x<4; x++) {
  if (x==0) {
    cadastro3[x] = window.prompt("Digite o nome: ");
  } else if (x==1) {
    cadastro3[x] = window.prompt("Digite a idade: ");
  } else if (x==2) {
    cadastro3[x] = window.prompt("Digite a altura: ");
  } else if (x==3) {
    cadastro3[x] = window.prompt("Digite o sexo: ");
  } 
}
document.write(cadastro3);
*/











document.write("<br><br>******************************")

//MATRIZ
document.write("<br><br>--MATRIZ--<br><br>");

funcionarios = new Array();

funcionarios = [["Manoel", 15, 1.92, "Masculino"], ["Anna Paula", 16, 1.77, "Feminino"], ["Dani", 39, 1.75, "Feminino"]];

document.write(funcionarios[0]+"<br>");



matrizFuncionarios2 = new Array();

for(l=0; l<3; l++) {
  matrizFuncionarios2[l] = new Array();
}

for(l=0; l<3; l++) {
  for(c=0; c<4; c++) {
    matrizFuncionarios2[l][c] = window.prompt("Funcionário "+(l+1)+", digite o " + (c+1) + "º dado: ");
  }
  document.write(l + " [" + (l+1) + "º Funcionário(a)]: " + matrizFuncionarios2[l] + "<br>");
}
document.write(matrizFuncionarios2);
