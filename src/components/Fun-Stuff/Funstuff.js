import React from "react";

import "./Funstuff.css";
import useSmoothScroll from "../../effects/useSmoothScroll/useSmoothScroll";




function Funstuff(props) {

    // useSmoothScroll(props.state);

    return(
        <>     

            <section id="sports" className="section-content-container">
                <h1>athletics</h1>
                <h2>coming soon...</h2>
            </section>

            <section id="cards" className="section-content-container">
                <h1>my collection</h1>
                <h2>coming soon...</h2>
            </section>

            <section id="music" className="section-content-container">
                <h1>music</h1>
                <h2>coming soon...</h2>
            </section>

            
        </>
    );
}

export default Funstuff;