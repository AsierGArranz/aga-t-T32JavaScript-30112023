var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numeroDNI = prompt('Introduce los 8 digitos de tu DNI');

let letraDNI = prompt('Introduce tu letra del DNI');

if(numeroDNI>99999999 || numeroDNI< 0){
    alert("El numero "+numeroDNI+" es incorrecto vuelve a introducirlo")
}else{
    var calculoDNI = numeroDNI%23;
    console.log("tu letra del dni es "+ letras[calculoDNI])
    if(letras[calculoDNI] == letraDNI){
        alert("El DNI introducido es correcto");
    }else{
        alert("La letra introducida es incorrecta");
    }
}

