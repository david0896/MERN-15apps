const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Formulario</h2>
        <p className="font-bold text-lg text-center">
          Añade pacientes y {''}
          <span className="text-indigo-600">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-md p-5 my-10">
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input 
              type="text"
              placeholder="Nombre de la mascota" 
              id="mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"           
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input 
              type="text"
              placeholder="Nombre del propietario" 
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"           
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input 
              type="email"
              placeholder="Email contacto propietario" 
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"           
            />
          </div>
          <div className="mb-5">
            <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
            <input 
              type="date"
              id="fechaAlta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"           
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea 
              placeholder="Describe los sintomas de la mascota" 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"           
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


