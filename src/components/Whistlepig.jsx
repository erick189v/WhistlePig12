import React, { useState, useEffect } from "react";
import axios from 'axios';

function WhistlePig(){
  const [cocktailData, setCocktailData] = useState([]);

  // const apiKey = import.meta.env.VITE_API_KEY

  

  useEffect(() => {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey"; 

    axios.get(URL)
      .then(response => {
        // console.log(response.data.drinks); 
        setCocktailData(response.data.drinks);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  async function fetchDrinkDetails(url) {
    try {
      const response = await axios.get(url);
      return response.data; 
    } catch (error) {
      console.error('Error fetching drink details:', error);
    }
  }

  useEffect(() => {
    if(cocktailData.length > 0) {
      handleIngredientData(); 
    }
  }, [cocktailData]); 

  async function handleIngredientData() {
    if (cocktailData.length > 0) {
      let promiseArray = cocktailData.map(drink => 
        fetchDrinkDetails(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
      );
      
     
      let drinkDetails = await Promise.all(promiseArray);
      console.log(drinkDetails); 
    }
    


  }

    return(
      <div id="whistlePig">
      <section id="About">
          <div>
              <h1>WhistlePig 12 OLD WORLD RYE</h1>
              <h3>WhistlePig's Old World Rye, aged for 12 years, 
                  epitomizes the fusion of traditional crafting methods 
                  and innovative finishing techniques. This 86-proof rye whiskey 
                  is a blend of three distinct finishes, each contributing its
                  own unique flavor profile.</h3>
          </div>
          <section>
              <ul> 
                  {cocktailData && cocktailData.map((cocktail, idx) => (
                      <li key={idx}> 
                          
                          <h4>Whiskey Recipes: {cocktail.strDrink}</h4>
                          <p>Instructions: {cocktail.idDrink}</p>
                      </li>
                  ))}
              </ul>
          </section>
      </section>
  </div>
);
}

export default WhistlePig;