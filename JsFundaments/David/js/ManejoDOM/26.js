//Eventos dom - submit

const form = document.querySelector('#formulario');
form.addEventListener('submit', e =>{
    e.preventDefault();
    const nombre = document.querySelector('.nombre').value;
    const pass = document.querySelector('.password').value;
    if(nombre ==='' || pass === ''){
        console.log('Debe llenar todos los campos');
    }else{
        console.log(nombre  + ' ' + pass);
    }
});