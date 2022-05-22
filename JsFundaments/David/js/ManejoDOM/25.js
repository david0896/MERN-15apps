//Eventos dom - inputs


const inputNombre = document.querySelector('.nombre'); 
inputNombre.addEventListener('input', (e)=> { //evento input registra cuando se teclea hasta cuando se pega texto
    console.log(e.target.value); //manera recomendada de llegar al value 
    console.log(inputNombre.value); //manera NO recomendada de llegar al value 
    console.log(e);
});

/*
    exiten otros eventos como 
    *--- KEYDOWN
    *--- KEYUP
*/

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', miFuncion);

function miFuncion(e){

    inputPassword.type = 'text';
    setTimeout(()=>{
        inputPassword.type = 'password';
    },300);

}








