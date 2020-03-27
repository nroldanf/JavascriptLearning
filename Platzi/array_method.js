
function articulo(nombre,costo){
    this.nombre = nombre;
    this.costo = costo;
}

var articulos = [
    new articulo("Bici",100),
    new articulo("Carro",3500),
    new articulo("TV",200),
    new articulo("Laptop",300),
    new articulo("audifonos",50)
];

// método para filtrar arreglos basado en los atributos de sus elementos
// equivalente al .apply de pandas
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
// genera un array nuevo. equivalente a list comprehension de Python 
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});


var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Carro"
});

// retorna si existe o no
var existeArticulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 600
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//***********OTRA FORMA DE SINTAXIS DE LOS MÉTODOS CON "=>" *************** */

var articulosFIltradosRe = articulos.filter(articulo => {
    return articulo.costo >= 700
})