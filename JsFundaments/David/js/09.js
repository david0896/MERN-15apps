//Manipulación de arrays - operaciones en los arreglos 

const teg = ['CSS','HTML','JAVASCRIPT','PHP','C#'];

//añadir elementos
//lo malo es que estos modifican el obj original mutandolo 
teg.push('GraphQL'); //añade al final 
teg.unshift('Node') //añade al principio

//como se hace para no modificar el obj original
const tegDos = ['SqlServer', ...teg, 'React']; //---------------------------BUENO

console.table(teg);
console.table(tegDos);

//eliminar elementos
//lo malo es que estos modifican el obj original mutandolo 
teg.pop(); // elimina el ultimo valor del arreglo 
teg.shift(); // elimina el primer valor del arreglo 
teg.splice(2,1); // elimina desde una posicion fija hasta tantos se indique y sino se indica elimina todo lo que le sigue 
console.table(teg);

//sin modificar el obj original 
const teg2 = teg.filter(function(elemento){ //-------------------------------------BUENO
    //console.log("Desde filter " + elemento)
    return elemento != 'HTML';
});

console.table(teg2);

//modificar o remplazar elementos

//lo malo es que estos modifican el obj original mutandolo 
teg2[0] = 'Express.js';
console.table(teg2);

//sin modificar el obj original 
const teg3 = teg2.map(function(elemento){ //-----------------------------------------------BUENO

    if(elemento === 'PHP'){
        return 'MONGO DB';
    }else{
        return elemento;
    }

});

console.table(teg3);


