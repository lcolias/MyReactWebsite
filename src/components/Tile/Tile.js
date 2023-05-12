import React, { useState, useEffect } from 'react';
import axios from 'axios';
import base64 from 'base-64';

import projectImagePlaceholder from '../../images/projectImagePlaceholder.jpg'
import './Tile.css'; 


function Tile(props){

    console.log(projectImagePlaceholder);

    return(
        <>
            <div className={`tile-container ${props.className}`}>
                <img src={projectImagePlaceholder} alt='Project Photo' />
                <h1>Project Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
    );
}

export default Tile;