//Codigo condicional, Operador Ternario, Operador Coalescente nulo

let caja = 2000;
const retirar = 260;
const stringRetirar = '260';
const targeta = true;

if (retirar < caja){
    if(retirar == stringRetirar)
        console.log(retirar + ' y ' + stringRetirar + ' son iguales');

    if(retirar === stringRetirar){
        console.log(retirar + ' y ' + stringRetirar + ' son Exactamente iguales');
    }else{
        console.log(retirar + ' y "260" NO son Exactamente iguales');
    }

    if(caja > 1000 || tagerta == true){
        console.log('retirando...');
        caja -= retirar;
        console.log('saldo disponible: ' + caja);
    }else if(caja > 3000 && targeta == true){
        console.log('puede pagar');
    }

}else{
    console.log('Saldo insuficiente');
}


const saldoTernario = caja > 1700 ? 'Usted tiene un saldo positivo' : 'Usted posee un saldo bajo';
console.log(saldoTernario); 

//operador Coalescente nulo

const ValorA = null, ValorB = null, ValorC = 'positivo';

const miValor = () =>{

    return ValorA ?? ValorB ?? ValorC;

}

console.log(miValor());