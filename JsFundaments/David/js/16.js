// Arrow functions - funciones flecha

const sum = () => {
    console.log(2+2);
}

sum();

//////////////////////////////////////////////////////////////////////////

const sum2 = (int1, int2) => {
    console.log(int1 + int2);
}

sum2(20, 20);

/////////////////////////////////////////////////////////////////////////

const sum3 = (int1 = 1, int2 = 2) => {
    return int1 + int2;
}

const miSuma = sum3(10, 10);

console.log(miSuma);

///////////////////////////////////////////////////////////////////////
//de esta manera simplificamos el return ya que es inplicito 
const sum4 = (int1, int2) => int1 + int2;

console.log(sum4(8, 8));

//con un solo parametro se puede simplificar los parentesis que contienen el parametro de la función 

const sum5 = int => int + 5;

console.log(sum5(6));



