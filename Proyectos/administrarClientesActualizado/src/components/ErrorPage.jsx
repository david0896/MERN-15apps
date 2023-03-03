import { useRouteError } from "react-router-dom"

export default function ErrorPage(){

    const error = useRouteError();
    console.log(error)

  return (
    <div className=" space-x-8">
        <h1 className=" text-6xl text-center font-extrabold mt-20 text-blue-900">CRM - Clientes</h1>
        <p className=" text-3xl text-center text-blue-600">¡Que mal hubo un error!</p>
        <p className=" text-center text-gray-600">{error.statusText || error.message}</p>
        
    </div>
  )
}

