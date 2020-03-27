let array = [1,2,3,4, [1,2,3, [1,2,3]]];

console.log(array.flat(2));


// ** ELiminar los espacios de una cadena 

let hola = "    hello    "
console.log(hola)
console.log(hola.trim());
console.log(hola.trimStart());
console.log(hola.trimEnd());

// Manejo de erroresx con try catch (no especificar catch (error))
try {

}catch{
    error
}

// convertir un arreglo a un objeto
let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries));

// Objeto de tipo simbolo para generar una descripción
let mySymbl = `Mi simbolo`
let symbo = Symbol(mySymbl);
console.log(symbo.description);