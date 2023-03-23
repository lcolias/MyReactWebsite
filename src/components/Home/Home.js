import React, {useState, useEffect, useRef} from 'react';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaEnvelope} from 'react-icons/fa';

import Tile from '../Tile/Tile';

import "./Home.css"; 


function Home(props){

    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),]

    const { ref: inViewRefs, inView: inViews } = useInView({
        threshold: 0.5
    });
    
    // Creates an intersection observer to apply to HTML elements
    const { ref: introRef, inView: introInview, entry: introEntry  } = useInView({
        threshold: 0.5
    });  
    const { ref: aboutRef, inView: aboutInView, entry: aboutEntry } = useInView({
        threshold: 0.5
    });  
    const { ref: skillsRef, inView: skillsInView, entry: skillsEntry } = useInView({
        threshold: 0.5
    });  
    const { ref: interestsRef, inView: interestsInView, entry: interestsEntry } = useInView({
        threshold: 0.5
    });  
    const { ref: contactRef, inView: contactInView, entry: contactEntry } = useInView({
        threshold: 0.5
    });  
    
    return(
        <>
            <section className='main-container'>
                

                <section ref={introRef} className={`introduction`}>
                    <h1 className={`hidden ${introInview ? 'show' : '' }`}>howdy patna's</h1>
                    <h2 className={`hidden ${introInview ? 'show' : '' }`}>name's luke!</h2>
                </section>

                
                <section ref={aboutRef} className='about'>
                    <h2 className={`hidden ${aboutInView ? 'show' : '' }`}>about me</h2>
                    <p  className={`hidden ${aboutInView ? 'show' : '' }`}>i'm a software engineer currently working at <b className='company-font'>NORTHROP GRUMMAN</b>. </p>
                </section>
                 
                <section ref={skillsRef} className='skills'>
                    <h2 className={`hidden ${skillsInView ? 'show' : '' }`} >some skillz</h2>

                    <div className={`project-preview hidden ${skillsInView ? 'show' : '' }`}>
                        <Tile > </Tile>
                        <Tile > </Tile>
                        <Tile > </Tile>
                    </div>
                </section>

                <section ref={interestsRef} className='interests'>
                    <h2 className={`hidden ${interestsInView ? 'show' : '' }`}>peep the hobbies</h2>
                </section>

                <section ref={contactRef} className='contact'>
                    <h2 className={`hidden ${contactInView ? 'show' : '' }`}>keep in touch!</h2>
                    
                    <ul>
                        <li className='footer-link'><FaLinkedin /></li>
                        <li className='footer-link'><FaInstagram /></li>
                        <li className='footer-link'><FaTwitter /></li>
                        <li className='footer-link'><FaFacebook /></li>
                        <li className='footer-link'><FaEnvelope /></li>
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