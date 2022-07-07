import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

        {
            gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                />
            ))
        }

    </div>
  )
}

export default ListadoGastos