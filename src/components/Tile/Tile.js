import React, { useState, useEffect } from 'react';

import projectImagePlaceholder from '../../images/projectImagePlaceholder.jpg'
import './Tile.css'; 


function Tile(props){

    //console.log(projectImagePlaceholder);

    return(
        <>
            <div className={`tile-container ${props.className}`}>
                <img src={projectImagePlaceholder} alt='Project Photo' />
                <h1>{props.repo ? props.repo.name : 'Project Template'}</h1>
                <p>{props.repo ? props.repo.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...'}  </p>
                <a href={props.repo ? props.repo.html_url : ''} target="_blank" rel="noopener noreferrer">more</a>
            </div>
        </>
    );
}

export default Tile;