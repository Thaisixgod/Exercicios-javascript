/*var alunos = ["Maria", "Thiago", "João"];
var notas1 = [8.0, 7.5, 7.0];
var notas2 = [7.0, 5.5, 6.0];


function media(n1, n2) {
  return (n1 + n2) / 2
}

function aprovado(media){
  if(media > 8){
  return "Aprovado";
}else{
  return "Reprovado";
}

}

for (let index in alunos) {

  var notaPrimeiro = notas1[index];
  var notaSegundo =  notas2[index];
  var m = media(notas1[index], notas2[index]);

console.log(` teste ${alunos[index]} = primeiro bimestre ${notaPrimeiro} / Segundo bimestre ${notaSegundo}  / Média dos alunos = ${m}  / ${aprovado(m)}`);
}*/
/*function calcular() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = parseFloat(document.getElementById("n3").value);
  var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
  
  if (media > 6){
    alert (`Aprovado com média ${media}`);
  }else{
    alert ("Reprovado");
  }
  console.log(`A média é ${parseInt(media)}`);
}*/

//alert (`A média é ${media.toFixed(1)} e você foi ${aprovado(media)}`); 
var a = 10;
var b = 5;
var c = a / b;
console.log(c)
function media(){
  var media = (nota1 + nota2 + nota3) / 3;
  return media
}
console.log(media())

var primeiroBimestre = [8, 5, 7];
var segundoBimestre = [10, 7, 7,5];

let alunos = ["Ana", "Maria", "Thiago"];