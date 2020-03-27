var estudiantes = ["Nicolas","Maria","Sergio","Rosa","Dario"]

function saludarEstudiante(nombre){
    console.log(`Hola ${nombre}`)
}


for(var indice = 0; indice < estudiantes.length; indice++) {
    saludarEstudiante(estudiantes[indice]);
}

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}