import React from 'react';
import './App.css';

function callApi() {
   fetch('https://service-helloworld-1.as.r.appspot.com/api/v1/hello/Tan', { method: 'GET' })
    .then(data => data.json()) // Parsing the data into a JavaScript object
    .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
	  <button onClick={callApi}>Call API</button>
    </div>
  );
}

export default App;
