import React from 'react';

import { motion as m } from 'framer-motion';

import {HiOutlineHeart} from 'react-icons/hi';

import "./Secret.css"; 

function Secret(props){

    return(
        <m.div>
            <div className='container'>

                <HiOutlineHeart className='heart'/>

            </div>
        </m.div>
    );
}

export default Secret;