import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';

import {FaHome, FaInfoCircle, FaCode, FaBasketballBall, FaMailBulk, FaBars} from 'react-icons/fa';

import './Navbar.css';

function Navbar() {

  const [toggled, toggle] = useReducer(
    (toggled) => !toggled, 
    false
);


  return (
    <>
        <nav className='navbar'>
            <ul className='navbar-container'>
                <li className='navbar-logo'><Link to='' > Lucas Colias </Link></li>
                <li className='navbar-link'><Link to=''         className='hover:bg-red-700'>    <FaHome /> </Link></li>
                <li className='navbar-link'><Link to='skills'   className='hover:bg-gray-600'>   <FaCode /> </Link></li>
                <li className='navbar-link'><Link to='funstuff' className='hover:bg-gray-600'>   <FaBasketballBall /> </Link></li>
                <li className='navbar-link'><Link to='about'    className='hover:bg-gray-600'>   <FaInfoCircle /> </Link></li>
                <li className='navbar-link'><Link to='contact'  className='hover:bg-gray-600'>   <FaMailBulk /> </Link> </li>
                <li className={toggled ? 'toggle' : 'toggle'} onClick(toggle)>     <a href='#'>                                         <FaBars /> </a> </li> 
            </ul>
        </nav>
    </>
  )
}

export default Navbar;