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

                

                <Blob blobNum='1'/>
                

                <section className='introduction'>

                </section>

                <section className='about'>

                </section>

                <section className='skills '>

                </section>

                <section className='interests'>

                </section>

                <section className='contact'>

                </section>

                <section className='footer'>
                    <ul>
                        <li className='footer-link'><div>LinkedIn</div></li>
                        <li className='footer-link'><div>Facebook</div></li>
                        <li className='footer-link'><div>Instagram</div></li>
                        <li className='footer-link'><div>Twitter</div></li>
                        <li className='footer-link'><div>Email</div></li>
                    </ul>
                </section>
               
                
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