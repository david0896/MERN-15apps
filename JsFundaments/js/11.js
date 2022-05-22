// iteracion de arrays (map)

const teg = ['CSS','HTML','JAVASCRIPT','PHP','C#'];

const tegforeach = teg.forEach(function(elemento){ // no recomendado 
    //console.log(elemento);
    return elemento;
});

const tegMap = teg.map(function(elemento){ // recomendado 
    //console.log(elemento);
    return elemento;
});

console.log(tegforeach);
console.log(tegMap);