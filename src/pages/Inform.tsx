import React, {useEffect,useState} from 'react'
import Ingredients from '../components/Ingredients';
import { Information } from '../type';
import { useParams } from 'react-router-dom';

const api1Url="https://www.themealdb.com/api/json/v1/1/lookup.php?i="


const Inform = () => {
  const [meal,setMeal] = React.useState<any>({})
  

  const {id} = useParams();
  const getInd = () => {
    fetch(api1Url+id)
    .then(res => res.json())
    .then(data => {
      console.log(data.meals[0])
      setMeal(data.meals[0])
    });
  }
  useEffect(() => {
    getInd()
  },[]);
  return (
    <div>
      <Ingredients 
      key={meal.idMeal}
      meal={meal}
      />
    </div>
  )
}

export default Inform