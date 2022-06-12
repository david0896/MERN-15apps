//otros array method utiles 
const teg = ['CSS','HTML','JAVASCRIPT','PHP','C#'];
const nums = [1, 2, 13, 6, 15];

///////-------INCLUDES-----------////////------------INCLUDES----------////////-------INCLUDES---////////
// comprobar si un elemento existe 
const busqueda = teg.includes('PHP'); 
console.log(busqueda);

////////////-------SOME-----------//////////------------SOME----------//////////-------SOME---////////
//retorna true o false si almenos un elemento del array cumple con la condicion 
const result = nums.some((elemment) => elemment > 10); 
console.log(result);

////////////-------FIND-----------//////////------------FIND----------//////////-------FIND---////////
//devuelve el primer elemento que cumpla con la condicion 
const miResult = nums.find((elemment) => elemment > 10);
console.log(miResult);

////////////-------EVERY-----------//////////------------EVERY----------//////////-------EVERY---////////
//devuelve true o false si todos cumplen con la condicion 
const miResultNum = nums.every((elemment) => elemment > 90);
console.log(miResultNum);

////////////-------REDUCE-----------//////////------------REDUCE----------//////////-------REDUCE---////////
//devuelve un acumulado, metodo diseñado solo para cantidades 
const resultado = nums.reduce((total, numActual)=> numActual + total, 0);
console.log("Resultado de reduce: " + resultado);

////////////-------FILTER-----------//////////------------FILTER----------//////////-------FILTER---////////
//crea un nuevo array en base a una condicion 
const filtrado1 = nums.filter(num => num > 7);
console.log(filtrado1);
const filtrado2 = teg.filter(miteg => miteg != 'PHP');
console.log(filtrado2);

////////////-------FOREACH-----------//////////------------FOREACH----------//////////-------FOREACH---////////
//iterar en los elemtos del array - no recomendado por no ser inmutable
teg.forEach(element => console.log(element));
console.log('----------------------------------');
teg.forEach((element, index) => console.log( index +': '+ element));

////////////-------MAP-----------//////////------------MAP----------//////////-------MAP---////////
//iterar en los elemtos del array - recomendado por no ser inmutable
const arr  = teg.map(element => 'Tegnologia ' + element);
console.log(arr);

////////////-------CONCAT-----------//////////------------CONCAT----------//////////-------CONCAT---////////
//une arrays creando uno nuevo 
const arryCombinado = teg.concat(nums);
console.log(arryCombinado);










