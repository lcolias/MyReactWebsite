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

          <div className='navbar-logo'>
            <Link to='' > lucas colias </Link>
          </div>

          <div className='toggle' onClick={toggle}>  <a href='#'>  {toggled ? <FaTimes /> : <FaBars />}  </a> </div> 

          <ul className={toggled ? 'active navbar-link-container' : 'navbar-link-container'}> 
            <li className='navbar-link'><Link to=''         ><FaHome /><div>home</div></Link></li>
            <li className='navbar-link'><Link to='about'    ><FaInfoCircle /><div>about</div></Link></li>
            <li className='navbar-link'><Link to='skills'   ><FaCode /><div>skills</div></Link></li>
            <li className='navbar-link'><Link to='interests'><FaBasketballBall /><div>interests</div></Link></li>
            <li className='navbar-link'><Link to='contact'  ><FaMailBulk /><div>contact</div></Link></li>
          </ul>

        </nav>
    </>
  )
}

export default Navbar;