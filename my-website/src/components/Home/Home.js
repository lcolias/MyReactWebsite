import React, {useState, useEffect, useRef} from 'react';
import { useInView } from 'react-intersection-observer';

import "./Home.css"; 


function Home(props){

    // Creates an intersection observer to apply to HTML elements
    const { ref: inViewRef, inView, entry } = useInView({
        threshold: 0.5
    });  

    useEffect(() => {
        console.log(entry);
    },[entry]);

    return(
        <>
            <section className='main-container'>
                

                <section ref={inViewRef} className={`introduction`}>
                    <h1 className={`hidden ${inView ? 'show' : '' }`}>Howdy Patna's</h1>
                    <h2 className={`hidden ${inView ? 'show' : '' }`}>The names Luke!</h2>
                </section>

                <section className='about'>
                    <h2>About Me</h2>
                    <p>I'm a Software Engineer currently working at <b>Northrup Grumman</b>. </p>

                </section>

                <section className='skills'>
                    <h2>Checkout My Skillz</h2>
                </section>

                <section className='interests'>
                    <h2>Peep the Hobbies</h2>
                </section>

                <section className='contact'>
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