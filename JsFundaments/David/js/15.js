// expresiones de funciones - function expression

//suma() aqui da error si se manda a llamar la funcion ya que la variable aun no esta declarada 

const sumar = function(int1, int2){

    return int1 + int2;

}

console.log(sumar(2, 2)); // en functions expression solo se puede mandar a llamar a la funcion luedo de ser declarada la variable contenedora 