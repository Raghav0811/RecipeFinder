import React from "react";
import logo from './logo.svg';

import './App.css';

const App = () => {

  const APP_ID = 'b5b8a081';
  const APP_KEY = '68c5c9c18b4c38368e3a8ad7169c6b5c';
  const ExampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}



export default App;
