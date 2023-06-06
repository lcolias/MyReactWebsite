import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Tile from '../Tile/Tile';

import './GitHubUserRepos.css'; 

function GitHubUserRepos(props) {
  // State to store the repositories
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch the user's repositories using the GitHub API
    axios.get(`https://api.github.com/users/${props.username}/repos`)
      .then(response => {
        // Create an array of promises to fetch readme files for each repository
        const repoPromises = response.data.map(repo => {
          return axios.get(repo.url + '/readme');
        });

        // Fetch all the readme files in parallel using Promise.all
        Promise.all(repoPromises)
          .then(readmeResponses => {
            // Combine repository data with respective readme content
            const updatedRepos = response.data.map((repo, index) => {
              return {
                ...repo,
                readme: readmeResponses[index].data
              };
            });

            // Update the state with the repositories and readme data
            setRepos(updatedRepos);
          })
          .catch(error => {
            console.error('Error fetching readme files:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }, [props.username]);

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