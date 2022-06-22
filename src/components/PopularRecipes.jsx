import React, { useEffect, useState } from "react";
import axios from "axios";

const PopularRecipes = () => {
  // GET https://api.spoonacular.com/recipes/random

  const [popularRecipes, setPopularRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPopularRecipesFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      //
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularRecipesFromAPI();
  }, []);

  return (
    <>
      <div className="font-poppins">
        <p1>Popular Recipes</p1>
      </div>
    </>
  );
};

export default PopularRecipes;
