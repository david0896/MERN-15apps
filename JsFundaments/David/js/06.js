//Destructuring con dos objetos o mas 

const objUno = {
    nombre : "monitor",
    precio : 345,
    oferta : true 
}

const objDos = {
    nombre : "corneta",
    precio : 110,
    oferta : false 
}

//sintaxis para un solo obj de destructuring que no funciona para dos obj
//esto da error ya que no pueden haber dos variables con el mismo nombre 
/*
    const {nombre} = objUno;
    const {nombre} = objDos;
*/

//Usamos alias para poder crear variables de igual nombre con destructuring

const {nombre, precio, oferta} = objUno;
const {nombre : obj2Nombre, precio : obj2Precio, oferta : obj2Oferta} = objDos;

console.log(nombre, precio, oferta);
console.log(obj2Nombre, obj2Precio, obj2Oferta);






