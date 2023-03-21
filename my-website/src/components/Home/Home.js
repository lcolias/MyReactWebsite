import React, {useState, useEffect, useRef} from 'react';
import { useInView } from 'react-intersection-observer';

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
                    <h1 className={`hidden ${introInview ? 'show' : '' }`}>Howdy Patna's</h1>
                    <h2 className={`hidden ${introInview ? 'show' : '' }`}>Name's Luke!</h2>
                </section>

                
                <section ref={aboutRef} className='about'>
                    <h2 className={`hidden ${aboutInView ? 'show' : '' }`}>About Me</h2>
                    <p  className={`hidden ${aboutInView ? 'show' : '' }`}>I'm a Software Engineer currently working at <b className='company-font'>NORTHROP GRUMMAN</b>. </p>
                </section>
                 
                <section ref={skillsRef} className='skills'>
                    <h2 className={`hidden ${skillsInView ? 'show' : '' }`} >Checkout My Skillz</h2>

                    <div className={`project-preview hidden ${skillsInView ? 'show' : '' }`}>
                        <Tile > </Tile>
                        <Tile > </Tile>
                        <Tile > </Tile>
                    </div>
                </section>

                <section ref={interestsRef} className='interests'>
                    <h2 className={`hidden ${interestsInView ? 'show' : '' }`}>Peep the Hobbies</h2>
                </section>

                <section ref={contactRef} className='contact'>
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