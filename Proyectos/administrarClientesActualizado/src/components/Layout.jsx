import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' md:flex md:min-h-screen '>
        <aside className=' md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className=' font-black text-4xl text-white text-center'>CRM - Clientes</h2>
        </aside>
        <main className=' md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout