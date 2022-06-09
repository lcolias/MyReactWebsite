import React, {useState, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import "./Home.css"; 

import Navbar from '../Navbar/Navbar';
import Blob from'../Blob/Blob';

function Home(props){

    return(
        <>
            <section className='main-container'>

                <Navbar />

                
                <Blob blobNum='1'/>
                
                
                
                {/*
                    <Parallax pages={5}>

                        <ParallaxLayer offset={0} speed={0.5}>
                            <h1>Howdy y'all, I'm {props.name}</h1>

                            <h2>Software Engineer and Shrewd Scalawag</h2>
                        </ParallaxLayer>
                        
                    </Parallax>
                */}
            </section>
        </>
    );
}

export default Home;