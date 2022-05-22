//async - await

const url = "https://jsonplaceholder.typicode.com/comments";

const consultaApi = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    resultado.forEach(element => {
        console.log(element);
    });
    console.log(resultado);
}

consultaApi();









