import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';


function App() {
  const [mode , setMode]  =useState('light');
  const changeMode = () => {
    if(mode==='light'){
      setMode('dark');
      // 222831
      document.body.style.backgroundColor = '#252A34';
      document.body.style.Color = 'white';
    }
    else{
      setMode('light');
      // FEFBF6
      document.body.style.backgroundColor = '#EEEEEE';
      document.body.style.Color = 'black';
    }
  }
  return (
    <>
      <NavBar mod={mode} changemode = {changeMode}/>

      <Home mod={mode}/>

    </>
  );
}

export default App;
