import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Tile from '../Tile/Tile';

import './GitHubUserRepos.css'; 

function GitHubUserRepos(props) {
  // State to store the repositories
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${props.username}/repos`)
    .then(response => {
      
      // stores all repositoryu data into an object array
      let repoData = response.data;

      
/*
      if (props.topThree) {
        repoData = repoData.slice(0, 3); // Get only the top three repositories
      }
*/
      // get all readme files from repos 
      const readmePromises = repoData.map(repo => {
        return axios.get(repo.url + '/contents/README.md');
      });

       // get all icon files from repos
       const iconPromises = repoData.map(repo => {
        return axios.get(repo.url + '/contents/icons');
      }); 
      
      // combine all promises into one array
      const allPromises = [...readmePromises, ...iconPromises];
    
      //resolves all promises into a single promise 
      Promise.all(allPromises)
      .then(responses => {
    
        const updatedRepos = repoData.map((repo, index) => {
          return {
            ...repo,
            readme: responses[index].data,
            icons: responses[index + (responses.length/2)].data

          };
        });

        setRepos(updatedRepos);

      })
      .catch(error => {
          console.error('Error fetching readme files:', error);
      });

    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
    });
  }, []);


  return (
    <>
      <div className={`tiles-container ${props.className}`}>
        {repos.map(repo => (
          <Tile key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
}

  export default GitHubUserRepos;