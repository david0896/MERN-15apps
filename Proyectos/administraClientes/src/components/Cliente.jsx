import {useNavigate} from 'react-router-dom'

const Cliente = ({cliente}) => {

    const navigate = useNavigate();

    const {nombre, empresa, email, telefono, notas, id} = cliente;

    return (
        <tr className=' border-b hover:bg-gray-200'>
            <td className='p-3'>
                {nombre}
            </td>
            <td className='p-3'>
                <p><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
                <p><span className='text-gray-800 uppercase font-bold'>Tel: </span>{telefono}</p>
            </td>
            <td className='p-3'>
                {empresa}
            </td>
            <td className='p-3'>
                {/* VER */}
                <button 
                    type='button' 
                    className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 
                    font-bold uppercase text-xs rounded-md mb-2'
                    onClick={()=> navigate(`/Clientes/${id}`)}
                >Ver</button> 

                {/* EDITAR */}
                <button 
                    type='button' 
                    className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 
                    font-bold uppercase text-xs rounded-md mb-2'
                    onClick={()=> navigate(`/Clientes/Editar/${id}`)}
                >Editar</button> 

                {/* ELIMINAR */}
                <button 
                    type='button'
                    className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 
                    font-bold uppercase text-xs rounded-md'
                >Eliminar</button> 

            </td>
        </tr>
    )
}

export default Cliente