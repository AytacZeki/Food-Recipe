import React from "react";
import { Information } from "../type";
import "./Ingredients.css";

interface Meals {
  meal: Information;
}
const Ingredients: React.FunctionComponent<Meals> = ({ meal }: Meals) => {
  const {
    strMeal,
    strCategory,
    strMealThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
  } = meal;

  return (
    <div className="cards-container">
      <div className="img-container">
        <img src={strMealThumb} alt={strMeal} className="cards-image" />
        <h2>{strMeal}</h2>
        <span className="categorys">Category: {strCategory}</span>
      </div>
      <div className="cards-body">
        <h2>Instructions</h2>
        <p>{strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          <li>{`${strIngredient1}  ${strMeasure1}`}</li>
          <li>{`${strIngredient2}  ${strMeasure2}`}</li>
          <li>{`${strIngredient3}  ${strMeasure3}`}</li>
          <li>{`${strIngredient4}  ${strMeasure4}`}</li>
          <li>{`${strIngredient5}  ${strMeasure5}`}</li>
          <li>{`${strIngredient6}  ${strMeasure6}`}</li>
          <li>{`${strIngredient7}  ${strMeasure7}`}</li>
          <li>{`${strIngredient8}  ${strMeasure8}`}</li>
          <li>{`${strIngredient9}  ${strMeasure9}`}</li>
          <li>{`${strIngredient10}  ${strMeasure10}`}</li>
          <li>{`${strIngredient11}  ${strMeasure11}`}</li>
          <li>{`${strIngredient12}  ${strMeasure12}`}</li>
          <li>{`${strIngredient13}  ${strMeasure13}`}</li>
          <li>{`${strIngredient14}  ${strMeasure14}`}</li>
          <li>{`${strIngredient15}  ${strMeasure15}`}</li>
          <li>{`${strIngredient16}  ${strMeasure16}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
