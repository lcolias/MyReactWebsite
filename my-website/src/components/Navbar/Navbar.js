import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';

import {FaHome, FaInfoCircle, FaCode, FaBasketballBall, FaMailBulk, FaBars, FaTimes} from 'react-icons/fa';

import './Navbar.css';

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
                <li className='navbar-link'><Link to=''         className='hover:bg-red-700'>    <FaHome /> Home                    </Link></li>
                <li className='navbar-link'><Link to='skills'   className='hover:bg-gray-600'>   <FaCode /> My Skills               </Link></li>
                <li className='navbar-link'><Link to='funstuff' className='hover:bg-gray-600'>   <FaBasketballBall /> My Interests  </Link></li>
                <li className='navbar-link'><Link to='about'    className='hover:bg-gray-600'>   <FaInfoCircle /> About Me          </Link></li>
                <li className='navbar-link'><Link to='contact'  className='hover:bg-gray-600'>   <FaMailBulk /> Contact me          </Link> </li>
                <li className='toggle' onClick={toggle}>  <a href='#'>  {toggled ? <FaTimes /> : <FaBars />}  </a> </li> 
            </ul>
        </nav>
    </>
  )
}

export default Navbar;