import React from 'react';

import projectImagePlaceholder from '../../images/projectImagePlaceholder.jpg'
import './Tile.css'; 

function Tile(props){

    console.log(projectImagePlaceholder);

    return(
        <>
            <div className='tile-container'>
                <img src='{stockImagePlaceholder}' alt='Project Photo' />
                <h1>Project Tile</h1>
            </div>
        </>
    );
}

export default Tile;