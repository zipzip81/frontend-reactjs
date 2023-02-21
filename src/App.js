import React, { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    fetch(`https://dev-backend-springboot.as.r.appspot.com/api/v1/hello/${name}`)
      .then(response => response.json())
      .then(data => setMessage(data.message));
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
