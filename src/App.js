import React from "react";
import "./styles.css"
import {  useState, useEffect } from 'react';

function App () {

  // Initialise state
  const [ active, setActive ] = useState({
    box: false,
    notif: true
  });

  const [ text, setText ] = useState({
    code: "",
    key: ""
  })

  // A function to update the state
  function toggleActive(e) {
    setActive(prev=> ({
      box: true,
      notif: false
    }))
    setText(prev=> ({
      code: e.keyCode,  
      key: e.key
   }))
  }
 
  // An effect that adds a listener, w/ a cleanup function
  useEffect(() => {
    window.addEventListener('keydown', e => toggleActive(e));
    return () => {
      window.removeEventListener('keydown', e => toggleActive(e));
    }
  }, []);

  // Returns the active status of the element from state
  function isActive(type) {
    return active[type] ? `${type} active` : `${type} inactive`;
  }

  return (
    <div>
      <div className={isActive('notif')}>
        Press Any Key
      </div>
      <div className={isActive('box')}>
        <h2 className="h2">KeyCode: {text.code}</h2>
        <h1 className="h1">Key: {text.key}</h1>
      </div>
    </div>
  );

}

export default App;


