import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', event => {
      setX(event.pageX);
      setY(event.pageY);
    });
  });


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>{x}, {y}</h1>
      <div className="box" style={{
        top: y + 'px',
        left: x + 'px',
        borderRadius: '20px',
      }}/>
    </div>
  );
}

export default App;
