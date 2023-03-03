export async function obtenerClientes(){

    // const url = "http://127.0.0.1:5173/clientes"
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    console.log(respuesta);

    const resultado = await respuesta.json();
    console.table(resultado);

    return resultado;

}

export async function obtenerClienteXid(id){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await respuesta.json();
    return resultado;

}

export async function agregarCliente(datos){
    console.log(datos);
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method : 'POST',
            body : JSON.stringify(datos),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        
        await respuesta.json;
        
    } catch (error) {
        console.log(error)
    }

}

export async function actualizarCliente(id, datos){
    try {
        
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method : 'PUT',
            body : JSON.stringify(datos),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        
        await respuesta.json;
        
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
    try {
        
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method : 'DELETE'
        })
        
        await respuesta.json;
        
    } catch (error) {
        console.log(error)
    }
}





