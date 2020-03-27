function auto(marca,modelo,ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}
// instanica de la funcion  cosntructora auto
// new hace referencia a mi funcion constructora
var micarrito = new auto("Toyota","Hilux",2020);
var tucarrito = new auto("Tesla","X",2018);
var sucarrito = new auto("Nissan","March",2054);