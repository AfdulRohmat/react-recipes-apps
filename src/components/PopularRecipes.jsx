import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const PopularRecipes = () => {
  // GET https://api.spoonacular.com/recipes/random

  const [popularRecipes, setPopularRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPopularRecipesFromAPI = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API}&number=8`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.recipes);
      setPopularRecipes(response.data.recipes);
      setIsLoading(false);
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
        <p className="font-bold text-2xl text-gray-600">Popular Recipes</p>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            ></div>
          </div>
        ) : (
          <Splide
            options={{
              perPage: 3,
              gap: "3rem",
              breakpoints: {
                375: {
                  perPage: 2,
                  gap: "16rem",
                },
                640: {
                  perPage: 2,
                  gap: "10rem",
                },
                768: {
                  gap: "4rem",
                },
                1024: {
                  gap: "2rem",
                },
              },
            }}
          >
            {popularRecipes.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer min-w-[16rem] mt-4 ">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 px-6 py-2 bg-slate-500 bg-opacity-20 w-full">
                      <p className="text-base md:text-xl font-normal tracking-tight text-white">
                        {recipe.title}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </div>
    </>
  );
};

export default PopularRecipes;
