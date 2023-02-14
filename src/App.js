import React, { useState } from 'react';
import './App.css';

function callApi() {
   fetch('https://service-helloworld-1.as.r.appspot.com/api/v1/hello/Tan', { method: 'GET' })
    .then(data => data.json()) // Parsing the data into a JavaScript object
    .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
}

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    fetch(`https://service-helloworld-1.as.r.appspot.com/api/v1/hello/${name}`)
      .then(response => response.json())
      .then(data => setMessage(data.message));
  };
	
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={callApi}>Call API</button>

      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
