import React from "react";

import "./Skills.css";


import GitHubUserRepos from "../External-Data/GitHubUserRepos";

function Skills(){

  return(
    <>
      
      <div className="skills-page">  

        <section className="Projects main-container">

          <h1>projects</h1>
            
          <GitHubUserRepos username="lcolias" className={`grid`}/>
         
        </section>

        <section className="Languages main-container">

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