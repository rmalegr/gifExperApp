import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <Link to={'/'} className="navbar-brand" >Use Context App</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive  ?  'isActive' : ''}`} to={'/'}>Home</NavLink> 
                </li>
                <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive  ?  'isActive' : ''}`} to={'about'}>About</NavLink> 
                </li>
                <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive  ?  'isActive' : ''}`} to={'login'}>Login</NavLink> 
                </li>
                
            </ul>
            </div>
  </div>
</nav>
    )
}