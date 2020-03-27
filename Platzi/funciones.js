// Declarativas

function miFuncion() {
    console.log("Hola ebebes")
    `Hola bebes ${frase} es ${numero}`
    return 3;
}

miFuncion();//llamado

//Expresion (funciones anonimas)

var miFuncion = function(a,b){
    return a + b
}

miFuncion();

// equivalente al .format o al f'' en Python

`Hola bebes ${frase} es ${numero}`


// scope en JS 
var nombre = "Nicolas";

function func(){
    var apellido = "Roldan"
    return nombre + " " + apellido
}