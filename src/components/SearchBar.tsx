import React from "react";
import "./SearchBar.css"
interface TypeOfValue{
  value:string,
  isLoading:boolean,
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined,
  onChange:React.ChangeEventHandler<HTMLInputElement> | undefined


}
const SearchBar:React.FunctionComponent<TypeOfValue> = ({ value, isLoading, handleSubmit, onChange } ) => {
  return (
    <form className="form1" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        className="form-control"
      />
      <input 
      disabled={isLoading || !value}
      type="submit"
      className="btn"
      value="Search" />
    </form>
  );
};

export default SearchBar;
