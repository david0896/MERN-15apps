import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    //manera de comprobar si un objeto esta lleno 
    if(Object.keys(paciente).length > 0){
      //al dar editar lo que este en paciente lo usamos para llenar el formulario vacio  para poder editar
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes("")){
      setError(true);
      return
    }

    setError(false);

    //objeto pacientes 
    const objPacientes = {
    nombre, 
    propietario, 
    email, 
    fecha, 
    sintomas
    }

    if(paciente.id){
      //editando registro
      objPacientes.id = paciente.id;
      const pacientesActualizados = pacientes.map(item => item.id === paciente.id ? objPacientes : item)
      setPacientes(pacientesActualizados)
    }else{
      //agregando nuevo registro
      objPacientes.id = generarId();
      setPacientes([...pacientes, objPacientes]);
    }

    //reinicio de form 
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
    setPaciente({});

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="font-bold text-lg text-center">
        Añade pacientes y {''}
        <span className="text-indigo-600">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-md p-5 my-10"
        onSubmit={handleSubmit}
      >
        {error && <Error>
          <p>
            Todos los campos son obligatorio
          </p>
        </Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => { setNombre(e.target.value) }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input
            type="text"
            placeholder="Nombre del propietario"
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => { setPropietario(e.target.value) }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            type="email"
            placeholder="Email contacto propietario"
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input
            type="date"
            id="fechaAlta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => { setFecha(e.target.value) }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            placeholder="Describe los sintomas de la mascota"
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => { setSintomas(e.target.value) }}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar paciente" : "Agregar paciente" }
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
            hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  )
}

export default Formulario


