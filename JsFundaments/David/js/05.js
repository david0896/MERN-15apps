const objetoUno = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

//evitar modificar el objeto con OBJECT METHOD
//Object.freeze(objetoUno);

//permite modificar propiedades existentes pero no agregar y eliminar propiedades de el objeto 
Object.seal(objetoUno);

//editar propiedas del objeto
objetoUno.nombre = "Monitor curvo";
console.table(objetoUno);

//agregar propiedades nuevas al objeto si no existen
objetoUno.imagen = "wallpaper.jpg";
console.table(objetoUno); 

//eliminar una propiedad de un objeto 
delete objetoUno.disponible;
console.table(objetoUno); 

