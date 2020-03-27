// *** CONVERSIÓN DE OBJETO A MATRIZ (ARREGLO DE ARREGLOS) ***
const data = {
    frontend: "Mateo",
    backend: "Edisson",
    designer: "La chiquis",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


// *** COLOCAR LOS VALUES DEL OBJETO EN UN ARRAY ***

const data = {
    frontend: "Mateo",
    backend: "Edisson",
    designer: "La chiquis",// trailling commas
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// *** AÑADIR COSAS AL FINAL DE UNA CADENA O INICIO ***

const string = "hello";
console.log(string.padStart(7,"hi"));
console.log(string.padEnd(12," -----"));

// *** TRAILLING COMMAS ***
const obt = {
    name: "Nicolasin",
}

// *** ASYNC - AWAIT ***

let valorcito = true;
const helloWorld = (valor) => {
  return new Promise((resolve,reject) => {
    (valor)
      ? setTimeout(() => resolve("Hola Mundirijillo"),3000)
      : reject(new Error("Error de prueba"))
  });
};

const helloAsync = async () => {
  const hello = await helloWorld(valorcito);
  console.log(hello);
}

helloAsync();

// ejecución correcta

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();