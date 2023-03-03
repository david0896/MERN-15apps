import {Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {

  const miLocation = useLocation();

  return (
    <div className=' md:flex md:min-h-screen '>
        <aside className=' md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className=' font-black text-4xl text-white text-center'>CRM - Clientes</h2>
          <nav className='mt-10 '>
            <a href="/">Clientes dom</a>
            <Link className={`text-2xl block mt-2 hover:text-blue-300 ${miLocation.pathname === '/clientes' ? 'text-blue-300' : 'text-white'}`} to="/clientes">Clientes rdom</Link>
            <Link className={`text-2xl block mt-2 hover:text-blue-300 ${miLocation.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'}`} to="/clientes/nuevo">Nuevo rdom</Link>
          </nav>
        </aside>
        <main className=' md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout