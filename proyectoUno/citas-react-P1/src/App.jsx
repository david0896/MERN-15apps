import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoPacientes from './Components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

//seccion LS 
  useEffect(() => {
    const obtenerLS = ()=>{
      const items = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(items);
    }    

    obtenerLS();
  }, [])
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
//seccion LS 

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
