import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useRandomGradient from './effects/useRandomGradient/useRandomGradient';
import { AnimatePresence } from 'framer-motion';

import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Funstuff from './components/Fun-Stuff/Funstuff';
import Contact from './components/Contact/Contact';
import Secret from './components/Secret/Secret';
import Whoops404 from './components/ErrorPage/Whoops404';
import Navbar from './components/Navbar/Navbar';



function App() {

  const [currentGradient, setCurrentGradient] = useState('');
  const [gradientTransition, setGradientTransition] = useState({})

  const location = useLocation();
  const newGradient = useRandomGradient(location);

  const locationArr = location.pathname?.split("/") ?? [];
       
  useEffect(() => {
      
    // set the --before-gradient 

    setGradientTransition({
      'background-image': currentGradient,
      '--before-gradient': newGradient,
      '--opacity': 1
    })

    // transition the before elment from opacity 0-1
    const timeoutId = setTimeout(() => {

      setCurrentGradient(newGradient);

      setGradientTransition({
       'background-image': newGradient,
        '--opacity': 0
      })

    }, 1000); // 1 seconds

    return () => {
      clearTimeout(timeoutId);
    };

    }, [newGradient]);

  return (
      <>
        <div className='App' style={gradientTransition}>

          <Navbar />
          <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={locationArr[1]}>
              <Route path="/"         element={<Home name="Luke"/>}/>
              <Route path="/about"    element={<About login="lcolias"/>}/>
              <Route path="/skills"   element={<Skills login="lcolias"/>}/>
              <Route path="/interests"element={<Funstuff />}/>
              <Route path="/contact"  element={<Contact />}/>
              <Route path="/secret"   element={<Secret />}/>
              <Route path="*"         element={<Whoops404 />} />
            </Routes>
          </AnimatePresence>
         
        </div>
      </>
    )
  }


export default App;
