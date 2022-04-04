/*
f = 1;
// 5! = 5 * 4 * 3 * 2  ->  5  ~ 2
for (x=6; x>2; x--) {
  document.write("f = f * (x-1) = " + f + "* (" + x + "-1) = " + (f*(x-1)) + "<br>");
  f = f * (x-1);
}

// 5! = 5 * 4 * 3 * 2 * 1 = 120

document.write("*********************<br><br>");
*/


//EXEMPLIFICANDO O RACIOCÍNIO DA RECURSÃO USANDO FUNÇÃO E FOR.
/*
function Fat(n) {
  f = 1;

  for (x=n+1; x>2; x--) {
    f = f * (x-1);
  }

  return f;
}

num = parseInt(window.prompt("Digite um número para calcular seu fatorial (n>=0): "));

document.write("O fatorial de " + num +" é: " + Fat(num) + "<br><br>");
*/





//RECURSÃO COM FUNÇÃO 

/*
function Fator(n) {
  if (n==0 || n==1) {
    return 1;
  } else {
    return (n * Fator(n-1));
  }
}

num = parseInt(window.prompt("Digite um número para calcular seu fatorial (n>=0): "));

fatorial = Fator(num);

document.write("FUNÇÃO => O fatorial de " + num + " é: " + fatorial + "<br><br>***************************<br>");
*/





//RECURSÃO COM PROCEDIMENTO 

function FatProc(n, f) {
  if (n==0 || n==1) {
    document.write("<br>PROCEDIMENTO => O fatorial é: " + f + "<br>");
  } else {
    FatProc(n-1, f*n);
  }
}

num = parseInt(window.prompt("Digite um número para calcular seu fatorial (n>=0): "));

FatProc(num, 1);