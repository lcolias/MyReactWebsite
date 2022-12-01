import React, { useState, useEffect } from "react";

import "./Skills.css";


function GitHubUser({login}) {
    const [data, setData] = React.useState(null);
    
    useEffect(() => {
      fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, []);
  
  
    if(data) {
      return(
        <div>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} />
  
        </div>
      );
    }
  
    return null;
  }


function Skills({ login }){

    const [data, setData] = useState(null);
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false); 

    useEffect(() => {

      if(!login) return; 

      setLoading(true);

      fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [login]);

    if(loading) return <h1>loading...</h1>
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if(!data) return null;

    if(data) {

      fetch(data.repos_url)
        .then(res => res.json())
        .then(setRepos)
        .catch(setError);

      console.log(data);
      return(
        <>
           
            <h1>Skills Page!</h1>
            <div>Github Username:{data.login}</div>
            <div>Location:{data.location}</div>
            <img alt={data.login} src={data.avatar_url} width="100" height="100"/>
            <div className="grid-Container">
              <div className="grid-item">1</div>
              <div className="grid-item">2</div>
              <div className="grid-item">3</div>
              <div className="grid-item">4</div>
              <div className="grid-item">5</div>
              <div className="grid-item">6</div>
              <div className="grid-item">7</div>
              <div className="grid-item">8</div>
              <div className="grid-item">9</div>
            </div>
        </>
      );
    }

    return(
      <>
          <h1>Skills Page!</h1>
          <div>No User Available</div>
      </>
    );
}

export default Skills; 