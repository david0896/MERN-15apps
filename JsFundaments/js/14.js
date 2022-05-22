// funciones que retornan valores 

function miSuma(int1, int2){
    return int1 + int2;
}

console.log(miSuma(3,9));

function laSuma(int1, int2, int3){
    return [((int1+int2)*int3), "operación aritmetica realizada"];
}

//aplicando destructuring de array 
const [result, message] = laSuma(2, 3, 5);
console.log(result);
console.log(message);

function laSumaObj(int1, int2, int3){
    const operation = ((int1+int2)*int3)
    return {
        operacion : operation, 
        mensaje : "Mensaje desde objeto"
    };
}

//aplicando destructuring de objeto
const {operacion, mensaje} = laSumaObj(8, 9, 2);
console.log(operacion);
console.log(mensaje);



