import { useState } from 'react'
import logo from './logo.svg'
import Header from './Components/Header'
import ListadoGastos from './Components/ListadoGastos'
import Modal from './Components/Modal'
import {generarId} from './Helpers'
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
  }

  const guardarGasto = gasto =>{

      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);

      setAnimarModal(false)

      setTimeout(() => {
          setModal(false);
      }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          gastos={gastos}
      />

      {isValidPresupuesto && (
          <>
            <main>
              <ListadoGastos
                  gastos={gastos}
              />
            </main>
            <div className='nuevo-gasto'>
              <img 
                  src={iconoNuevoGasto} 
                  alt="icono de nuevo gasto"
                  onClick={handleNuevoGasto}
              />
            </div>
          </>
      )}

      {modal  && 
        <Modal 
          setModal={setModal} 
          animarModal={animarModal} 
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      }
      
    </div>
  )
}

export default App
