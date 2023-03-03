import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import ErrorPage from "./components/ErrorPage";
import {action as eliminarClienteAction} from "./components/Cliente"


const router = createBrowserRouter([
    {
        path : '/clientes',
        element : <Layout/>,
        children : [
          {
            index : true,
            element : <Index/>,
            loader : clientesLoader,
            errorElement : <ErrorPage/> 
          },
          {
            path : '/clientes/nuevo',
            element : <NuevoCliente/>,
            action : nuevoClienteAction,
            errorElement : <ErrorPage/> 
          },
          {
            path : '/clientes/:clienteId/editar',
            element : <EditarCliente/>,
            loader : editarClienteLoader,
            action : editarClienteAction,
            errorElement : <ErrorPage/> 
          },
          {
            path : '/clientes/:clienteId/eliminar',
            action : eliminarClienteAction,
            errorElement : <ErrorPage/> 
          }
        ]
    }  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
