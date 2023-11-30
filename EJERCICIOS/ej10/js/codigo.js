var cadenaTexto = prompt("introduce cadena de caracteres para ver si es un palindromo")

let fraseReverse =  cadenaTexto.toLowerCase().replace(/\s/g, '').split('').reverse().join('');
let fraseComparar = cadenaTexto.toLowerCase().replace(/\s/g, '');

if(fraseReverse === fraseComparar){
    alert("es un palindromo");
}else{
    alert("no es un palindromo");
}