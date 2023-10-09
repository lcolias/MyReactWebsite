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

        <section className="projects section-content-container">

          <h1>projects</h1>
            
          <GitHubUserRepos username="lcolias" className={`repo-grid`}/>
         
        </section>

        <section className="languages section-content-container">

          <h1>technologies</h1>

          <ul>
            <li>C | C++ | C#</li>
            <li>HTML | CSS | JavaScript | React</li>
            <li>arduino | raspberry pi</li>
            <li>Python</li>
          </ul>

        </section>
      </div>
    </m.div>
  );
}

export default Skills; 