import React from "react";

import { motion as m } from "framer-motion";

import "./Funstuff.css";
import useSmoothScroll from "../../effects/useSmoothScroll/useSmoothScroll";




function Funstuff(props) {

    // useSmoothScroll(props.state);

    return(
        <m.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            transition={{duration: 0.5, ease:"easeOut"}}

        >     

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

            
        </m.div>
    );
}

export default Funstuff;