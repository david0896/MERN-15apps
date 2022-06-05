import { useState } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoPacientes from './Components/ListadoPacientes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario/>
        <ListadoPacientes/>
      </div>
    </div>
  );
}

export default App;
