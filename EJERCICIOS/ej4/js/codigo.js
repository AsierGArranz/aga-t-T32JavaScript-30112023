//comprobacion texto
var valores = [true, 5, false, "hola", "adios", 2];

var text_lenght;
var text;

for(var i = 0; i < valores.length; i++){
    if(typeof valores[i]==="string"){
        text_lenght=valores[i].length;
        text = valores[i];
    }
}
console.log(text+ " es el texto mas grande con el tamaño de "+text_lenght+" caracteres")
//boolean
for(var i = 0; i < valores.length; i++){
    if(typeof valores[i] === "boolean"){
        console.log("en la posicion "+ i+ " hay un boolean que es "+valores[i]);
    }
}
//calculos
for(var m = 0; m < valores.length; m++){
    if(typeof valores[m] === "number"){
        for(var n = 0; n < valores.length; n++){
            if(typeof valores[n]==="number"){
                console.log(valores[m] + "+" + valores[n]+ "="+(valores[m]+valores[n]));
                console.log(valores[m] + "-" + valores[n]+ "="+(valores[m]-valores[n]));
                console.log(valores[m] + "*" + valores[n]+ "="+(valores[m]*valores[n]));
                console.log(valores[m] + "/" + valores[n]+ "="+(valores[m]/valores[n]));
                console.log(valores[m] + "%" + valores[n]+ "="+(valores[m]%valores[n]));
            }
        }
    }
}