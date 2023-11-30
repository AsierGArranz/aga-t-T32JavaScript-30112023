var cadenaTexto = prompt("introduce cadena de caracteres")

if(cadenaTexto===cadenaTexto.toUpperCase()){
    alert("El texto [ "+cadenaTexto+" ] solo contiene mayusculas");
}else if(cadenaTexto===cadenaTexto.toLocaleLowerCase()){
    alert("El texto [ "+cadenaTexto+" ] solo contiene minusculas")
}else{
    alert("El texto [ "+cadenaTexto+" ] contiene mayusculas y minusculas")
}