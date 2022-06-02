import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';

import {FaHome, FaInfoCircle, FaCode, FaBasketballBall, FaMailBulk, FaBars, FaTimes} from 'react-icons/fa';

import './Navbar.css';

/* */
function Navbar() {
  const [toggled, toggle] = useReducer(
    (toggled) => !toggled, 
    false
);


  return (
    <>
        <nav className='navbar'>
            <ul className={toggled ? 'active navbar-container' : 'navbar-container'}>
                <li className='navbar-logo'><Link to='' > Lucas Colias </Link></li>
                <li className='navbar-link'><Link to=''         >    <FaHome /> Home                    </Link></li>
                <li className='navbar-link'><Link to='skills'   >   <FaCode /> My Skills               </Link></li>
                <li className='navbar-link'><Link to='funstuff' >   <FaBasketballBall /> My Interests  </Link></li>
                <li className='navbar-link'><Link to='about'    >   <FaInfoCircle /> About Me          </Link></li>
                <li className='navbar-link'><Link to='contact'  >   <FaMailBulk /> Contact me          </Link> </li>
                <li className='toggle' onClick={toggle}>  <a href='#'>  {toggled ? <FaTimes /> : <FaBars />}  </a> </li> 
            </ul>
        </nav>
    </>
  )
}

export default Navbar;