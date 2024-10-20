import { Outlet } from 'react-router-dom';

import { NavBar, Footer } from '../components/index';


export const Layout = () => {
  return (
    <div className='App'>
        {/* navigation bar */}
        <nav>
            <NavBar />
        </nav>

    {/* main section */}
        <main>
            <Outlet />
        </main>

        {/* footer */}
        <footer>
            <Footer />
        </footer>

     </div>
  )
}
