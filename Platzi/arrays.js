var miListica = [1,2,3,"hola",true];
var frutas = ["manzana","platano","papaya","cereza"]
console.log(frutas);

console.log(frutas.length);
console.log(frutas[0]);

// mutar el array (los arrays son mutables)
frutas[0] = "pera"
// equivalente del append en Python
frutas.push("uva");
// eliminar elemento por nombre
frutas.pop()
// append al inicio
frutas.unshift("uva")
// eliminar el elemento del inicio
frutas.shift()
// obtener la posicion del elemento por nombre
frutas.indexOf("papaya")