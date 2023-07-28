import React, {useState, useEffect} from "react";

import "./GitHubUser.css";

function GitHubUser({login}) {
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

      //console.log(data);

      return(
        <>
            <div className="container-flex">

                <div className="item-flex-2 avi">
                    <img alt={data.login} src={data.avatar_url}/>
                </div>

                <div className="item-flex-3 info">
                    <div className="left-col">Name:</div>       <div className="right-col"><em>{data.name}</em></div>
                    <div className="left-col">Location:</div>   <div className="right-col">{data.location}</div>
                    <div className="left-col">Company:</div>    <div className="right-col"><b className='company'>{data.company.toUpperCase()}</b></div>
                    <div className="left-col">Motto:</div>      <div className="right-col">{data.bio}</div>

                </div>
            </div>
        </>
      );
    }

    return(
      <>
          <div>No User Available</div>
      </>
    );
}
export default GitHubUser;