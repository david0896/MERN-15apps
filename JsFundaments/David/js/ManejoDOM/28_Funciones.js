function sumar(numero1, numero2){
    const result = numero1 + numero2;
    console.log(result); 
}

function restar(numero1, numero2){
    const result = numero1 - numero2;
    console.log(result); 
}

//No se puede exportar dos default por que da error
//export default sumar;
//export default restar;

//para exportar mas de una funcion se hace como objeto 

export {
    sumar,
    restar
}