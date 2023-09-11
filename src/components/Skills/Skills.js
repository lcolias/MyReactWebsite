import React from "react";

import { motion as m } from 'framer-motion';

import "./Skills.css";

import GitHubUserRepos from "../External-Data/GitHubUserRepos";

function Skills(){

  return(
    <m.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
      transition={{duration: 0.5, ease:"easeOut"}}
    >
      
      <div className="skills-page">  

        <section className="Projects section-content-container">

          <h1>projects</h1>
            
          <GitHubUserRepos username="lcolias" className={`grid`}/>
         
        </section>

        <section className="Languages section-content-container">

          <h1>languages | frameworks | technologies</h1>

          <ul>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>arduino</li>
            <li>raspberry pi</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>

        </section>
      </div>
    </m.div>
  );
}

export default Skills; 