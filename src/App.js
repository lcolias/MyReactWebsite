import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Funstuff from './components/Fun-Stuff/Funstuff';
import Contact from './components/Contact/Contact';
import Secret from './components/Secret/Secret';
import Whoops404 from './components/ErrorPage/Whoops404';

import Navbar from './components/Navbar/Navbar';

function App(props) {

  const [color, setColor] = useState(null);

  return (
      //<GitHubUser login="lcolias"/>
      <>
        <div className='App'>

          <Navbar />

          <Routes>
            <Route path="/MyReactWebsite/"         element={<Home name="Luke"/>}/>
            <Route path="/MyReactWebsite/about"    element={<About login="lcolias"/>}/>
            <Route path="/MyReactWebsite/skills"   element={<Skills login="lcolias"/>}/>
            <Route path="/MyReactWebsite/interests"element={<Funstuff />}/>
            <Route path="/MyReactWebsite/contact"  element={<Contact />}/>
            <Route path="/MyReactWebsite/secret"   element={<Secret />}/>
            <Route path="/MyReactWebsite/*"        element={<Whoops404 />} />
          </Routes>
        </div>
      </>
    )
  }


export default App;
