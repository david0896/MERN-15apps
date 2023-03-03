import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import {agregarCliente} from "../api/clientes"

{/* request = petición*/}
export async function action({request}) {

  const formData = await request.formData()

  {/*Manera 1 de validar que trae un formulario*/}
  const datos = Object.fromEntries(formData);
  console.log(datos);

  {/*Manera 2 de validar que trae un formulario*/}
  const email = formData.get('email');
  console.log(formData.get('email'));

  {/*Manera 3 de validar que trae un formulario*/}
  console.log([...formData]);

  {/*Validación*/}

  const errores = [];
  console.log(errores);
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(Object.values(datos).includes('')){
    {/*en state no deben ser usados funciones o atributos que muten pero este action no es un state asi que no hay problemas en usarlos*/}
    errores.push('Todos los campos son obligatorios');
  }

  if(!regex.test(email)){
    errores.push('Dirección de correo no valido');
  }

  console.log(errores)

  {/*Retornar datos si hay errores*/}
  if(Object.keys(errores).length){
    return errores 
  }

  await agregarCliente(datos);

  return redirect('/clientes')

}

function nuevoCliente() {

  const navigate = useNavigate();
  const arrayErrores = useActionData();

  return (
    <>   
      <h1 className=" font-black text-4xl text-blue-900">Nuevo clientes</h1>
      <p className=" mt-3">Agrega un nuevo cliente</p>
      <div className='flex justify-end'>
        <button 
          className='
           bg-blue-800 uppercase font-bold text-white py-1 px-3 
             rounded-lg hover:bg-blue-600' 
             onClick={()=>navigate('/')}> {/*tambien se puede usar en el navigate el -1 para volver a la pagina anterior Ej: navigate (-1) */}
          volver 
        </button>
      </div>
      <div className=" bg-white shadow-md rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {console.log(`array ${arrayErrores}`)}
        {arrayErrores?.length && arrayErrores.map((error, i)=><Error key={i}>{error}</Error>)}
        <Form 
          method="post"
          noValidate
        >
          <Formulario />
          <input 
            type="submit" 
            className="w-full p-3 bg-blue-800 hover:bg-blue-600 mt-2 rounded-md text-white font-bold text-xl  uppercase"
            value="Registrar cliente" 
          />
        </Form>
      </div>
    </>
  )
}

export default nuevoCliente