import React, {useState, useEffect, useReducer} from "react";

import "./About.css";

function About() {

    const [checked, toggle] = useReducer(
        (checked) => !checked, 
        false
    );

    return(
        <>
            <h1>I've never been one for comprehensively cocky characterizations of myself... </h1>
            <h3>... but a little bit of flashiness never hurt nobody  </h3>


            
            <label htmlFor="checkbox">{checked ? "Checked" : "Not Checked"}</label>
            <input 
                id="checkbox"
                type="checkbox"     
                value={checked} 
                onChange={toggle}
            />
            
        </>
    );
}

export default About;