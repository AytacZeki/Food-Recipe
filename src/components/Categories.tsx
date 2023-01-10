import React, { useState, useEffect } from "react";
import { CategoryName } from "../type";
import "./Categories.css";

const apilistUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const Categories = () => {
  // const [category, setCategory] = useState({strCategory: string;}[{strCategory: ""}]);

  const [category, setCategory] = useState<{strCategory: string;}[]>(
    [],
  );

  const categoryList = () => {
    fetch(apilistUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data.meals);
      });
  };
  useEffect(() => {
    categoryList();
  }, []);

  const onClick=(e: React.MouseEvent<HTMLButtonElement>) =>{
e.preventDefault()
  }
  return (
    <div className="categories">
      {category.map((v, key) => (
        <button onClick={onClick} value={v.strCategory} key={key}>{v.strCategory}</button>
      ))}
    </div>
  );
};

export default Categories;
