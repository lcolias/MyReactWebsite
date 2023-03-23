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
                <li className='navbar-logo'><Link to='' > lucas colias </Link></li>
                <li className='navbar-link'><Link to=''         >   <FaHome />            <div>home</div>      </Link></li>
                <li className='navbar-link'><Link to='about'    >   <FaInfoCircle />      <div>about</div>    </Link></li>
                <li className='navbar-link'><Link to='skills'   >   <FaCode />            <div>skills</div>     </Link></li>
                <li className='navbar-link'><Link to='funstuff' >   <FaBasketballBall />  <div>interests</div>  </Link></li>
                <li className='navbar-link'><Link to='contact'  >   <FaMailBulk />        <div>contact</div>    </Link></li>
                <li className='toggle' onClick={toggle}>  <a href='#'>  {toggled ? <FaTimes /> : <FaBars />}  </a> </li> 
            </ul>
        </nav>
    </>
  )
}

export default Navbar;