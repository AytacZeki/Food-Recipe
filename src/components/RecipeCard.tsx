import React from "react";
import { Root } from "../type";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

interface Recip {
  recipe: Root;
}
const RecipeCard: React.FunctionComponent<Recip> = ({ recipe }: Recip) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <Link className="to-ingredients" to={`/${idMeal}`}>
          ingredients
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
