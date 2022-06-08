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
      return(
        <>
            <h1>Skills Page!</h1>
            <div>Github Username:{data.login}</div>
            <div>Location:{data.location}</div>
            <img alt={data.login} src={data.avatar_url} width="100" height="100"/>
        </>
      );
    }

    return(
      <>
          <h1>Skills Page!</h1>
          <div>No User Available</div>
          {/*<svg 
                    className='blob pos2'
                    viewBox="225 300 600 400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1">
                        
                        <g transform="translate(490.4428724243488 346.1357388614863)">
                            <animated.path 
                                id="blob2"
                                d={animationProps.blob} 
                                config={{duration:5000}}
                                fill="#BB004B"
                            /> 
                        </g>                        
                </svg>

                <svg 
                    className='blob pos3'
                    viewBox="-100 0 1200 800" 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1">
                        
                        <g transform="translate(490.4428724243488 346.1357388614863)">
                            <animated.path 
                                id="blob2"
                                d={animationProps.blob} 
                                config={{duration:5000}}
                                fill="#BB004B"
                            /> 
                        </g>                        
                </svg>

                <svg 
                    className='blob pos4'
                    viewBox="-300 0 1500 1000" 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1">
                        
                        <g transform="translate(490.4428724243488 346.1357388614863)">
                            <animated.path 
                                id="blob2"
                                d={animationProps.blob} 
                                config={{duration:5000}}
                                fill="#BB004B"
                            /> 
                        </g>                        
                </svg>

                <svg 
                    className='blob pos5'
                    viewBox="-1000 -500 3000 2000" 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1">
                        
                        <g transform="translate(490.4428724243488 346.1357388614863)">
                            <animated.path 
                                id="blob2"
                                d={animationProps.blob} 
                                config={{duration:5000}}
                                fill="#BB004B"
                            /> 
                        </g>                        
    </svg>*/}
      </>
    );
}

export default Skills; 