import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WPD from '../assets/WPDistillery.jpg'
import WPD2 from '../assets/WPDistillery2.jpg'

function Ingredients(){
    const [cocktailData, setCocktailData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('whiskey');

    useEffect(() => {
        const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=whiskey"; 

        axios.get(URL)
          .then(response => {
            setCocktailData(response.data.ingredients);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, [searchTerm]);

    // Function to extract the first paragraph from strDescription
    const extractFirstParagraph = (strDescription) => {
      const paragraphs = strDescription.split('\r\n\r\n'); // Split by empty lines
      return paragraphs.length > 0 ? paragraphs[0] : ''; // Get the first paragraph
    }

    return (
        <div id='ingredients'>
            <section id="Ingredients">
                <div>
                    <h1>How it's done</h1>
                    <h3>
                        <ul>
                            {cocktailData.map(cocktail => (
                                <li key={cocktail.idIngredient}>
                                  {extractFirstParagraph(cocktail.strDescription)}
                                </li>
                            ))}
                        </ul>
                    </h3>
                    <div className='WPD'>
                    <img src={WPD} alt="WPD" />
                    <img src={WPD2} alt="WPD2" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ingredients;
