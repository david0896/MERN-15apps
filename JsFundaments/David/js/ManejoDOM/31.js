//async - await - multiples llamados

const url = "https://jsonplaceholder.typicode.com/comments";

const url2 = "https://jsonplaceholder.typicode.com/photos";

//consulta a multiples url con problema de performace 
const consultaApi = async () => {
    const inicio = performance.now(); 

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    //console.log(resultado);

    //console.log("Iniciando segunda consulta");

    const respuesta2 = await fetch(url2);
    const resultado2 = await respuesta2.json();
    //console.log(resultado2);

    const fin = performance.now(); 
    console.log(`Ejecuciòn PRIMER async ${fin - inicio} ms`);

}

consultaApi();

////////////////////////////////////////////////////////////////////////////////////////////////////////

const consultaApi2 = async () => {
    const inicio = performance.now(); 

    const [respuesta, respuesta2] =  await Promise.all([fetch(url), fetch(url2)]);

    const resultado = await respuesta.json();
    //console.log(resultado);

    //console.log("Iniciando segunda consulta");

    const resultado2 = await respuesta2.json();
    //console.log(resultado2);

    const fin = performance.now(); 
    console.log(`Ejecuciòn SEGUNDO async ${fin - inicio} ms`);

}

consultaApi2();











