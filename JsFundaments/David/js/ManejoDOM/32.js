//String literal - plantilla de string - template string 
const producto = "Pantalla 42 pulgadas";
const categoria = "Tegnología";
const precio = 450;

function mensaje(){
    return "Feliz compra :D";
}

console.log(producto + " de categoria: " + categoria + " $" + precio + " Dolares, " + mensaje());
console.log(`${producto} de categoria: ${categoria} $${precio} Dolares, ${mensaje()}`);
