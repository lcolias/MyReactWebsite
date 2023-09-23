import React, { useState, useEffect } from 'react';

import projectImagePlaceholder from '../../images/projectImagePlaceholder.jpg'
import './Tile.css'; 


function Tile(props){

    return(
        <>
            <div className={`tile-container ${props.className}`}>
                <h1>{props.repo ? props.repo.name : 'Project Template'}</h1>
                <div className='tech-img-list'>
                    {props.repo.icons.map((icon,index) => (
                        <img key={index} src={icon.download_url} alt='Project Photo' />
                    ))}
                </div>
                <p>{props.repo ? props.repo.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...'}  </p>
                <a href={props.repo ? props.repo.html_url : ''} target="_blank" rel="noopener noreferrer">more</a>
            </div>
        </>
    );
}

export default Tile;