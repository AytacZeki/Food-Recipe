import React,{useState,useEffect} from 'react';
import { CategoryName, Root } from '../type';
import RecipeCard from './RecipeCard';
import "./Api.css"
import SearchBar from './SearchBar';

const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="

const Api = () => {
    const [isLoading,setIsLoading] = useState(false);
  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState<Root[]>([]);
  const [foods,setFood] = useState<CategoryName[]>([])


  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false)
  };
  
  useEffect(() => {
    searchRecipes()
 
  },[]);

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) =>{
    e.preventDefault()
    searchRecipes()

  }

  return (
    <div className="contain">
      
      <SearchBar
      value={query}
      handleSubmit={handleSubmit}
      onChange={(e) => setQuery(e.target.value)}
      isLoading={isLoading}
      />
      <div className="recipes">
        {recipes?recipes.map((recipe) =>(
            <RecipeCard 
            key={recipe.idMeal}
            recipe={recipe}/>)):"Not Founded"}
      </div>
      
    </div>
  );
}

export default Api