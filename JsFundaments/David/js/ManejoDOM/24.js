//Eventos dom - clicks
const head = document.querySelector('.heading');
head.addEventListener('click', ()=> {
    console.log('Diste click en heading');
    head.textContent = 'BLOG';
});

const enla = document.querySelectorAll('.navegacion a');
enla.forEach((elemento)=>{
    if(elemento.id == 'en3'){
        elemento.addEventListener('click', (e)=>{ 
            e.preventDefault();
            console.log('Enlace tres seleccionado')
        });
    }
});







