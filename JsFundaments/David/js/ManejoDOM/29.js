//Fetch API y promises

const url = "https://jsonplaceholder.typicode.com/comments";

const consultaApi = () => {

    fetch(url).then(respuesta => respuesta.json())
              .catch(error => console.log('hubo un error con la url ' + error))
              .then(resultado => {
                    resultado.forEach(element => {
                        console.log(element);
                    });
              })
              .catch(error => console.log('hubo un error con el resultado ' + error))

}

consultaApi();