import React from "react";

import { motion as m } from 'framer-motion';

import "./Whoops404.css";



function Whoops404() {
    return(
        <m.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            transition={{duration: 0.5, ease:"easeOut"}}
        >

            <h1>Error Page not Found!</h1>
        </m.div>
    );
}

export default Whoops404;