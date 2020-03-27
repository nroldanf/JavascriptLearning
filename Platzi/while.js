var estudiantes = ["Nicolas","Maria","Sergio","Rosa","Dario"]

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

while (estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}