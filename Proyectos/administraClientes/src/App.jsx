import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout'
import Inicio from './Paginas/Inicio'
import NuevoCliente from './Paginas/NuevoCliente'
import EditarCliente from './Paginas/EditarCliente'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/Clientes' element={<Layout/>} >
            <Route index element={<Inicio/>}/>
            <Route path='Nuevo' element={<NuevoCliente/>}/>
            <Route path='Editar/:id' element={<EditarCliente/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
