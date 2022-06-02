import React, {useState, useEffect} from 'react';

import "./Home.css"; 

function Home(props){

    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired");

   /* useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    }, [emotion]); 
    
    useEffect(() => {
        console.log(`Its ${secondary} around here!`); 
    }, [secondary]);
*/
    return(
        <>
            <div>
                <h1>Howdy y'all, I'm {props.name}</h1>

                <h2>Software Engineer and Shrewd Scalawag</h2>
            </div>
            
            <div className=''>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50"/>
                </svg>
            </div>
            <img/>
            <h2>Right now im: {emotion} and {secondary}</h2>
            <button onClick={() => setEmotion("happy")}>
                Make Happy
            </button>
            <button onClick={() => setSecondary("Crabby")}> 
                Make Crabby
            </button>    
            <button onClick={() => setEmotion("frustrated")}>
                Frustrate
            </button>
            <button onClick={() => setEmotion("enthusiastic")}>
                Enthuse
            </button>
        </>
    );
}

export default Home;