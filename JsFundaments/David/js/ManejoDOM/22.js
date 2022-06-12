//selectores dom - queryselectorAll

const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);

//se debe iterar para poder acceder a las propiedades de los elementos 
const textElement = Array.from(enlaces).map((element)=>{
    //debugger;
    if(element.id == 'en3'){
        //debugger
        //console.log(element.textContent);
        return element.textContent; 
    }

    // return element.textContent;
});

console.log(textElement);