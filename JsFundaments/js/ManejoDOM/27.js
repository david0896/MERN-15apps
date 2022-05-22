//Generando codigo HTML con js

const form = document.querySelector('#formulario');
form.addEventListener('submit', e =>{
    e.preventDefault();
    const nombre = document.querySelector('.nombre').value;
    const pass = document.querySelector('.password').value;

    const oldAlertas = document.querySelector('.alerta');
    if(oldAlertas){
        oldAlertas.remove();
    } 
    
    const alerta = document.createElement('DIV'); // cuando generemos elementos hacerlo en MAYUSCULAS 
    alerta.id = 'miAlerta';
    //para trabajar las clases usar CLASSLIST
    alerta.classList.add('alerta', 'segunda-clase', 'tercera', 'otras');
    console.log(alerta);

    if(nombre ==='' || pass === ''){
        //console.log('Debe llenar todos los campos');
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('error');

    }else{
        // console.log(nombre  + ' ' + pass);
        alerta.classList.add('exito');
        alerta.textContent = 'Bienvenido :D';

    }

    console.log(alerta);

    form.appendChild(alerta);
});





