import React, {useState, useEffect, useReducer} from "react";

import "./About.css";

function About() {

    const [checked, toggle] = useReducer(
        (checked) => !checked, 
        false
    );

    return(
        <>
            <h1>About Page!</h1>
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