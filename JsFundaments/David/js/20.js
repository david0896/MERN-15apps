//scope de variables

const precio = 300; //variable global 

function price(){

    const precio = 600; //variable local 
    console.log|(precio); 

}

console.log(precio);

price();