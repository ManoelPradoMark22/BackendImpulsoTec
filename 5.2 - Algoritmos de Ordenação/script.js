const arrNumbers = [100, 40, 20, 60, 70, 80, 30, 50, 90, 10];

function BubbleSort(arr){
  for(i=0; i<(arr.length-1); i++){
    for(j=0; j<((arr.length-1)-i); j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr
}

document.write(arrNumbers + "<br>" + BubbleSort(arrNumbers));











//com passo a passo:
const arrNumbers2 = [100, 40, 20, 60, 70, 80, 30, 50, 90, 10];

document.write("<br><br>*************************<br><br>Com Passo a Passo:<br><br>")
function BubbleSort2(arr){
  for(i=0; i<(arr.length-1); i++){
    document.write("--------<br>i="+i+"<br>--------<br><br>");
    for(j=0; j<((arr.length-1)-i); j++){
      document.write("j=" + j+"<br>");
      document.write("arr[j] > arr[j+1] ?<br>");
      document.write("arr["+j+"] > arr["+(j+1)+"] ?<br>");
      document.write(arr[j] + " > " + arr[j+1] + "?<br>");
      if(arr[j] > arr[j+1]){
        document.write("TRUE -> TROCA DE POSIÇÃO<br><br>");
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      } else {
        document.write("FALSE -> NÃO TROCA DE POSIÇÃO<br><br>");
      }
    }
    document.write("arr Novo.....: ["+ arr +"]<br>");
    document.write("***************<br>");
  }

  return arr;
}

document.write("["+arrNumbers2+"]<br>");
document.write(arrNumbers2 + "<br>" + BubbleSort2(arrNumbers2));
