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
      let repoData = response.data;

      

      if (props.topThree) {
        repoData = repoData.slice(0, 3); // Get only the top three repositories
      }

      const repoPromises = repoData.map(repo => {
        return axios.get(repo.url + '/readme');
      });

      
      Promise.all(repoPromises)
      .then(readmeResponses => {
        const updatedRepos = repoData.map((repo, index) => {
          return {
            ...repo,
            readme: readmeResponses[index].data
          };
        });

        console.log(updatedRepos);

        setRepos(updatedRepos);

      })
      .catch(error => {
          console.error('Error fetching readme files:', error);
      });

    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
    });
  }, [props.username, props.topThree]);

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