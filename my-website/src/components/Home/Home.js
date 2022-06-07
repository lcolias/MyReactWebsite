import React, {useState, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';

import "./Home.css"; 

import Navbar from '../Navbar/Navbar';

//Animation Variables
const DURATION = 3000;

const blobs = [
    "M131 -145.3C165.8 -96.2 187.4 -48.1 181.1 -6.4C174.7 35.4 140.4 70.7 105.5 100.2C70.7 129.7 35.4 153.4 -8.8 162.2C-53 171 -106.1 165.1 -156.1 135.6C-206.1 106.1 -253 53 -261.6 -8.6C-270.2 -70.2 -240.5 -140.5 -190.5 -189.6C-140.5 -238.8 -70.2 -266.9 -11.1 -255.8C48.1 -244.7 96.2 -194.5 131 -145.3",
    "M141 -121C191 -91 245.5 -45.5 243.4 -2.1C241.2 41.2 182.5 82.5 132.5 111.2C82.5 139.8 41.2 155.9 -8.8 164.8C-58.9 173.6 -117.9 175.2 -167.7 146.5C-217.5 117.9 -258.3 58.9 -246.5 11.8C-234.7 -35.4 -170.4 -70.7 -120.5 -100.7C-70.7 -130.7 -35.4 -155.4 5.1 -160.4C45.5 -165.5 91 -151 141 -121",
    "M166.6 -161.3C200.8 -132.5 202.9 -66.2 187.5 -15.4C172 35.4 139 70.7 104.9 115.9C70.7 161 35.4 216 -17.7 233.7C-70.7 251.4 -141.4 231.8 -180.3 186.6C-219.1 141.4 -226 70.7 -220.9 5.2C-215.7 -60.3 -198.3 -120.7 -159.5 -149.5C-120.7 -178.3 -60.3 -175.7 2.9 -178.6C66.2 -181.6 132.5 -190.1 166.6 -161.3"
];



function Home(props){

    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired");

    //  State of blob path
    const [activeIndex, setActiveIndex] = useState(0);

    //  Animation Properties
    const animationProps = useSpring({
       blob: blobs[activeIndex],
       config: {duration:DURATION} 
    });
    
    // React Hook that tracks change of the blobs path property
    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveIndex(activeIndex + 1);            
        }, DURATION);

            if(activeIndex > 2) setActiveIndex(0);

        return () => {
            clearTimeout(timeout)
        };

    },[activeIndex])
    
   /* useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    }, [emotion]); 
    
    useEffect(() => {
        console.log(`Its ${secondary} around here!`); 
    }, [secondary]);
*/
    return(
        <>
            <section className='main-container'>
                
                <Navbar />

                <svg 
                    className='blob pos1'
                    viewBox="0 0 900 600" 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1">
                        
                        <g transform="translate(490.4428724243488 346.1357388614863)">
                            <animated.path 
                                id="blob1"
                                d={animationProps.blob} 
                                config={{duration:5000}}
                                fill="#BB004B"
                            /> 
                        </g>                        
                </svg>
                
                <div className='content'>
                    <h1>Howdy y'all, I'm {props.name}</h1>

                    <h2>Software Engineer and Shrewd Scalawag</h2>
                </div>
                
            
            </section>
        </>
    );
}

export default Home;