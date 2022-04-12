import logo from './logo.svg';
import React from 'react';
import './App.css';


function Checkbox() {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  })

  return (
    <>
      <input 
      type="checkbox" 
      value={checked} 
      onChange={() => 
          setChecked(checked => !checked)
        }
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

function App(props) {
  return (
   <Checkbox />
  );
  
}

export default App;
