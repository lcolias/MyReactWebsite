import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
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
                

                <section ref={introRef} className='introduction'>

                    <h1 className={`hidden ${introInview ? 'show' : '' }`}>howdy patna's</h1>
                    <h2 className={`hidden ${introInview ? 'show' : '' }`}>the name's luke</h2>
                    <h1 className={`hidden ${introInview ? 'show' : '' }`}>🤠</h1>

                </section>

                
                <section ref={aboutRef} className='about'>

                    <h2 className={`hiddena ${aboutInView ? 'show' : '' }`}>about me <Link to='about'>🤵🏻</Link></h2>
                    <p  className={`hiddena ${aboutInView ? 'show' : '' }`}>i'm a software engineer currently working at <b className='company-font'>NORTHROP GRUMMAN</b>. </p>
                    <p  className={`hiddena ${aboutInView ? 'show' : '' }`}>i have an affinity for clean and simple solutions to complex and sophiscicated problems. </p>
            
                </section>
                 
                <section ref={skillsRef} className='skills'>

                    <h2 className={`hiddens ${skillsInView ? 'show' : 'hide' }`} >some skillz <Link to='skills'>💻</Link></h2>

                    <div className={`project-preview`}>
                        <Tile className={` hiddens ${skillsInView ? 'show delay-1' : 'hide' }  `} > </Tile>
                        <Tile className={` hiddens ${skillsInView ? 'show delay-2' : 'hide' }  `} > </Tile>
                        <Tile className={` hiddens ${skillsInView ? 'show delay-3' : 'hide' }  `} > </Tile>
                    </div>

                </section>

                <section ref={interestsRef} className='interests'>

                    <h2 className={`hidden ${interestsInView ? 'show' : '' }`}>peep the hobbies <Link to='interests'>🏀</Link></h2>
    
                </section>

                <section ref={contactRef} className='contact'>

                    <h2 className={`hiddenc ${contactInView ? 'show' : 'hide' }`}>keep in touch! <Link to='contact'>👇</Link></h2>
                    
                    <ul className='link-container'>
                        <li className={` hiddenc ${contactInView ? 'show delay-1' : 'hide' }  `}><a className='ft-link' href='https://www.linkedin.com/in/lucas-colias'><FaLinkedin /> </a></li>
                        <li className={` hiddenc ${contactInView ? 'show delay-2' : 'hide' }  `}><a className='ft-link' href='https://www.instagram.com/_duke_luke_/'><FaInstagram /></a></li>
                        <li className={` hiddenc ${contactInView ? 'show delay-3' : 'hide' }  `}><a className='ft-link' href='https://twitter.com/_duke_luke_'><FaTwitter />  </a></li>
                        <li className={` hiddenc ${contactInView ? 'show delay-4' : 'hide' }  `}><a className='ft-link' href='https://www.facebook.com/luke.colias/'><FaFacebook /> </a></li>
                        <li className={` hiddenc ${contactInView ? 'show delay-5' : 'hide' }  `}><a className='ft-link' href='mailto:lpcolias@gmail.com'><FaEnvelope /> </a></li>
                    </ul>

                </section>

            </section>
        </>
    );
}

export default Home;