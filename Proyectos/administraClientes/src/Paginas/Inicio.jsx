import { useState, useEffect } from 'react'
import Cliente from '../components/Cliente';

const inicio = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setClientes(resultado);
      }catch(e){
        console.log(`Error atajado ${e}`)
      }
    }

    obtenerClientesApi();
  }, [])
  


  return (
    <>
        <h1
            className=' font-black text-4xl text-blue-900'
        >Cliente</h1>
        <p 
            className='mt-3 '
        >Administra tus clientes</p>

        <table className='shadow bg-white table-auto w-full mt-5'>
          <thead className='bg-blue-800 text-white'>
            <tr className='text-left'>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Empresa</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
                <Cliente
                  key={cliente.id}
                  cliente={cliente}
                />
            ))}
          </tbody>
        </table>

    </>
  )
}

export default inicio