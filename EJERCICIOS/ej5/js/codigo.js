var num1 = 5;
var num2 = 8;

var resultado;

if(num1 > num2){
    resultado = num1;
}else{
    resultado = num2;
}
console.log("el numero " + resultado + " es el mayor de los dos")

if(num1 > 0){
    console.log("el numero "+num1+ " es un numero positivo")
}else{
    console.log("el numero "+num1+ " es un numero negativo o distinto a 0")
}

if(num2 > 0){
    console.log("el numero "+num2+ " es un numero positivo")
}else{
    console.log("el numero "+num2+ " es un numero negativo o distinto a 0")
}

resultado = num1 + 1;
if(resultado<= num2){
    console.log("Incrementar en 1 el valor del numero " + num1 + " no lo hace mayor o igual al numero " + num2);
}else{
    console.log("Incrementar en 1 el valor del numero " + num1 + " lo hace mayor que el numero " + num2);
}