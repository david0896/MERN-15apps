import { useState, useEffect } from 'react';

const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (![nombre, propietario, email, fecha, sintomas].includes("")) {
      //console.log("Enviando formulario");

      //objeto pacientes 
      const objPacientes = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      setPacientes([...pacientes, objPacientes]);

      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
      
      setError(false);
    } else {
      console.log("Hay al menos un campo sin completar!!!");
      setError(true);
    }

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
        {error && (
          <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 round-mb'>
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
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
          value="Agregar paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
            hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  )
}

export default Formulario


