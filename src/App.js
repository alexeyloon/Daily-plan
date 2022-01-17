import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives";
  const fetchData = async () => {
      try {
          const response = await fetch(url,{
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
              "x-rapidapi-key": "caf8749041mshe0410cffcd2e7eep1ce6b2jsncd067f5fb992"
            }
          } );
          const result = await response.json();
          console.log(result);
          setData(result);
      } catch (error) {
          console.log("error", error);
      }
  };
  useEffect(() => {


    fetchData();
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
