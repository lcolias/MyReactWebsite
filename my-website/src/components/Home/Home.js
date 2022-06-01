import React, {useState, useEffect} from 'react';

import "./Home.css"; 

function Home(props){

    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired");

    useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    }, [emotion]); 
    
    useEffect(() => {
        console.log(`Its ${secondary} around here!`); 
    }, [secondary]);

    return(
        <>
            <h1>Howdy y'all, I'm {props.name}</h1>
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