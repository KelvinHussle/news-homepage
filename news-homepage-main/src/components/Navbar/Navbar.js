import React ,{ useState }from "react";
import "./Navbar.css";
import Hamburger from "../images/icon-menu.svg"
import Brand from "../images/logo.svg";
import { NavLink } from 'react-router-dom'

const Navbar =()=>{

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
        
        <nav className='navbar'>
        <div className="container">
          <div className="logo">
          <img src={Brand} alt="Brand Logo" style={{ width: '65px', height: '40px' }}/>
          </div>
          <div className='menu-icon' onClick={handleShowNavbar}>
          <img src={Hamburger} alt="Hamburger" style={{ width: '40px', height: '17px' }}/>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
              <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                New
              </li>
              <li>
                Popular
              </li>
              <li>
                Trending
              </li>
              <li>
                Categories
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );}

export default Navbar;