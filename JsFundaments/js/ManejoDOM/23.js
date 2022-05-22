//manipular html con js

const textElement = document.querySelector('.heading');
textElement.textContent = 'HOLA MUNDO JS';

const nombre = document.querySelector('#nombre');
nombre.value = 'Nombre por defecto';

const ele = document.querySelectorAll('.navegacion a');
ele.forEach((elemento)=>{
    elemento.textContent = 'enlaces PRO';
});











