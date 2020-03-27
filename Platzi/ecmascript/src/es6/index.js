
// *** DEFAULT PARAMS ***

function funcioncita(name,age,country) {
    var name = name || "Nicolas";
    var age = age || 24;
    var country = country || "Colombia";
    console.log(`Nombre: ${name} Edad: ${age} País: ${country}`)
}

// es6
function funcioncita2(name = "Nicolás",age = 24, country = "Colombia"){
    console.log(name,age,country);
}


funcioncita2();
funcioncita2("Julián",35,"Colombia");

// *** Concatenacion TEMPLATE LITERAL ***

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


// *** Multilinea en los scripts ***
let lorem = "Estoy aprendiendo JS par fin maldita sea! por finnnn \n"
+ "tengo que, sin embargo, aprender OOP ccon Python de manera adecuada"

// es6
let lorem2 = `otra frase epica, maldita sea, odio a las personas me gusta
estar solo más que nada en el mundo
`;

console.log(lorem);
console.log(lorem2);

// *** Desestructuración de elementos ***

let person = {
    name: "Nicolas",
    age: 24,
    country: "Colombia"
}

console.log(person.name,person.age);

//es6
let {name, age} = person;
console.log(name,age);

// *** Spread operator ***

let team1 = ["Nicolas","Nicolas2","Nicolas3"];
let team2 = ["Lizeth","Dayana","Lina"];

let education = ["David", ...team1,...team2];

console.log(education);


// *** LET Y CONST ***

{
    var globalin = "Global var!";
}

{
    let globalinLet = "Global Let";
    console.log(globalinLet);
}

console.log(globalin);


const a = "bb";
a = "bc";


// *** Propiedad de objetos mejorada ***

let name = "Nicolas";
let age = 24;

//es5
obj = { name: name, age: age};
//es6
obj2 = {name,age};
console.log(obj2);

// *** Arrow Functions ***

const names = [
    {name:"Nicolas",age: 24},
    {name: "Juanito",age: 29}
];

let listOfNames = names.map(function(item){
    console.log(item.name)
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...//codigo
}

const listOfNames4 = name => {
    ...//bloque de codigo
}

const square = num => num * num;


// *** Promise ***

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("hey mag nigga promise!");
        } else{
            reject("oopsie!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hello mundo"))
    .catch(error => console.log(error));


// *** Clases ***

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,3));


// *** MOdulos ****
import {hello} from "./module";

hello();

// *** Generators ***
function* helloWorld() {
    if (true){
        yield "Hola babies ";// yield guarda el estado si ya fue llamado n veces
    }
    if (true){
        yield "World";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);