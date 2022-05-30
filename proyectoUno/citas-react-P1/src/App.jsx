import { useState } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoPacientes from './Components/ListadoPacientes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </div>
  );
}

export default App;
