import {Navigate, Route, Routes} from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { About } from './About'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'



export const MainApp = () => {
    //RUTAS **

    return (

          <UserProvider>
          <Navbar />
            <hr />
            <Routes>
                <Route path='/' element={<HomePage colores="red" />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<h1>404</h1>} />
                <Route path='/*' element={<Navigate to={'about'} /> } />
            </Routes>
          </UserProvider>
    
    )
}