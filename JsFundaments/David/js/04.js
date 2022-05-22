//objetos 

/*
const nombre = "tablet";
const precio = 300;
const disponible = true;
*/

const objetoUno = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

console.log(objetoUno);
console.table(objetoUno);
console.log(objetoUno.nombre);

//destructuring
const {nombre, precio, disponible} = objetoUno;

console.log(precio);

// object literal enhancement

const usuario = "leo22";

const objetodos = {
    usuario
}

console.table(objetodos);

