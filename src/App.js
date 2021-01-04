import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = 'b5b8a081';
  const APP_KEY = '68c5c9c18b4c38368e3a8ad7169c6b5c';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    setRecipes(data.hits);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}



export default App;
