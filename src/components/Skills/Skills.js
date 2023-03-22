import React, { useState, useEffect, useDebugValue } from "react";

import "./Skills.css";

import Tile from '../Tile/Tile';

function Skills(){

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/user/repos?type=public', {
      headers: {
        Authorization: 'Bearer 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'
      }
    })
    .then(response => response.json())
    .then(data => setRepos(data))
    .catch(error => console.error(error));
  }, []);

  return(
    <>
      
      <div className="skills-page">  

        <section className="Projects">

          <h1>My GitHub Repositories</h1>
            
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
          </ul>

        </section>

        <section className="Languages">

        </section>
      </div>
    </>
  );
}

export default Skills; 