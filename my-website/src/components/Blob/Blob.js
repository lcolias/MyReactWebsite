import React, {useState, useEffect} from "react";
import {animated, useSpring, to} from 'react-spring';

import "./Blob.css";

//Animation Variables
const BLOB_STATES = 3;
const DURATION = 3000;

const blobs = [
    "M131 -145.3C165.8 -96.2 187.4 -48.1 181.1 -6.4C174.7 35.4 140.4 70.7 105.5 100.2C70.7 129.7 35.4 153.4 -8.8 162.2C-53 171 -106.1 165.1 -156.1 135.6C-206.1 106.1 -253 53 -261.6 -8.6C-270.2 -70.2 -240.5 -140.5 -190.5 -189.6C-140.5 -238.8 -70.2 -266.9 -11.1 -255.8C48.1 -244.7 96.2 -194.5 131 -145.3",
    "M141 -121C191 -91 245.5 -45.5 243.4 -2.1C241.2 41.2 182.5 82.5 132.5 111.2C82.5 139.8 41.2 155.9 -8.8 164.8C-58.9 173.6 -117.9 175.2 -167.7 146.5C-217.5 117.9 -258.3 58.9 -246.5 11.8C-234.7 -35.4 -170.4 -70.7 -120.5 -100.7C-70.7 -130.7 -35.4 -155.4 5.1 -160.4C45.5 -165.5 91 -151 141 -121",
    "M166.6 -161.3C200.8 -132.5 202.9 -66.2 187.5 -15.4C172 35.4 139 70.7 104.9 115.9C70.7 161 35.4 216 -17.7 233.7C-70.7 251.4 -141.4 231.8 -180.3 186.6C-219.1 141.4 -226 70.7 -220.9 5.2C-215.7 -60.3 -198.3 -120.7 -159.5 -149.5C-120.7 -178.3 -60.3 -175.7 2.9 -178.6C66.2 -181.6 132.5 -190.1 166.6 -161.3"
];

function Blob(props){
    
    //  State of blob path
    const [activeIndex, setActiveIndex] = useState(0);

    //  Animation Properties
    const morphProps = useSpring({
       blob: blobs[activeIndex],
       config: {duration:DURATION} 
    });
    
    // React Hook that tracks change of the blobs path property
    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveIndex(activeIndex + 1);            
        }, DURATION);

            if(activeIndex > BLOB_STATES - 1) setActiveIndex(0);

        return () => {
            clearTimeout(timeout)
        };

    },[activeIndex])

    // Blob Movement Animation
    const { x, y } = useSpring({ x: 0, y: 0 })

    const transform = to([x, y], (x, y) => `translate(${x}px, ${y}px)`)


    return(
        <>
            <animated.svg 
                    
                    style={transform}
                    className='blob'
                    viewBox="0 0 900 600" 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1"
                    >

                    <g transform="translate(490.4428724243488 346.1357388614863)">
                        <animated.path 
                            className={'blob' + props.blobNum}
                            d={morphProps.blob} 
                        /> 
                    </g>                        
            </animated.svg>
        </>
    );
}

export default Blob;