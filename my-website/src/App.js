import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';


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


function Checkbox() {

  const [checked, toggle] = React.useReducer(
    checked => !checked, 
    false
  );


  return(
    <>
      <input 
        type="checkbox" 
        value={checked} 
        onChange={toggle}
        />
      {checked ? "checked" : "not checked"}
    </>
  );

}

function App(props) {

  return (
    //<GitHubUser login="lcolias"/>
    <Checkbox />
  )
  
}

export default App;
