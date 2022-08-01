import {Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {

    const location = useLocation();
    const urlActual = location.pathname;

    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-blue-900 px-5 py-10 '>
                <h2 className='text-4xl font-black text-center text-white'>CRM - Cientes</h2>
                <nav className='mt-10'>
                    <Link 
                        className={` ${urlActual === '/Clientes' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/Clientes">Clientes</Link>
                    <Link    
                        className={`${urlActual === '/Clientes/Nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/Clientes/Nuevo">Nuevo Cliente</Link>
                </nav>
            </div>
            <div className='md:w-3/4 p-10 bg-gray-100'>
                <Outlet/>
            </div>        
        </div>
    )
}

export default Layout