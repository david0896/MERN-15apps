//ESTRUCTURAS Y TIPOS DE DATOS EN JS

/**
 * Big int
 * Boolean
 * Funtion
 * Null
 * Number
 * Object
 * String
 * Symbol
 * Undefined 
 */

//undefined
let mascota;

console.log(typeof  mascota);
mascota = "perro";
console.log(typeof  mascota);

// boolean

const descuento = true;
console.log(typeof  descuento);

// number

const num1 = 2;
const num2 = -2;
const num3 = 29786908790695484.90;
console.log(typeof  num1);
console.log(typeof  num2);
console.log(typeof  num3);


//big int 

const numeroGrande = BigInt(67581267459847523945923574927464);
console.log(typeof  numeroGrande);

// el bigint no se puede mezclar con number a menos que se use la coherción o casting 

//symbol
//los symbols siempre son diferentes aunque contengan el mismo valor 
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol === segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

// null
const miNull = null;
console.log(typeof  miNull);












