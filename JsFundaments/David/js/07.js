//Unir dos o mas objetos (...)

const producto = {
    nombre : "monitor",
    precio : 345,
    oferta : true 
}

const cliente = {
    nombre : "unt asociados",
    ubicacion : "av oeste calle 45 " 
}


// se debe conservar el objeto original buscando siempre la inmutabilidad 
// como no se deben unir objetos 

/*
    const onionObj = Object.assign(producto, cliente); //no 
    console.table(producto);
*/

//spread operator (...)
//opcion 1 - no usar si los obj involucrados tienen propiedades de igual nombre 
const onionObj = {...producto, ...cliente};
console.table(onionObj);
//console.table(producto);
//console.table(cliente);


//OPCION 2 - OBJETO + SPREAD OPERATOR 
const onionObj2 = {
    producto : {...producto},
    cliente : {...cliente}
}

console.table(onionObj2);
console.table(producto);
console.table(cliente);
