let numeroF = prompt('Introduce el numero que quieres hacer el factorial');

var resultado=1;
while(numeroF>0){
        resultado *= numeroF;
        numeroF--;
}
alert(resultado)