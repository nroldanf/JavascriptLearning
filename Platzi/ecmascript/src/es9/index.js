// *** OPERADOR DE REPOSO: EXTRAER LAS PROPIEDADES DE UN OBJETO QUE NO SE HA CONSTRUIDO
const obj = {
    name : "Nicolas",
    age : 24,
    country: "Colombia",
}

let { country, ...all } = obj;
console.log(all);

// *** PROPIEDADES DE PROPAGACIÓN PARA UNION DE OBJETOS ***
const obj = {
    name: "Nicolas",
    age: 24,
}

const obj1 = {
    ...obj,
    country: "Colombia"
}

const obj2 = {
    country: "COlombia",
    ...obj1
}

console.log(obj1);
console.log(obj2);


// *** PROMISE finally ***
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? resolve("Hola mundo cruel")
            : reject(new Error("Error de prueba"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
//.finally(() => console.log("Finalizo este prro"))


// *** MEJORAS EN CUANTO AL USO DE REGEX (VISUALIZAR ELEMENTOS EN FORMA SEPARADA) ***
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day);