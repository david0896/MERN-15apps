import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Control de gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto
              presupuesto={presupuesto}
            />
        ): (
            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
            />
        )}
        
    </header>
  )
}

export default Header