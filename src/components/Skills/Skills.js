import React, { useState, useEffect, useDebugValue } from "react";

import "./Skills.css";

import Tile from '../Tile/Tile';
import GitHubUserRepos from "../External-Data/GitHubUserRepos";

function Skills(){

  return(
    <>
      
      <div className="skills-page">  

        <section className="Projects">

          <h1>projects</h1>
            
          <GitHubUserRepos username="lcolias" className={`grid`}/>
         
        </section>

        <section className="Languages">

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
    </>
  );
}

export default Skills; 