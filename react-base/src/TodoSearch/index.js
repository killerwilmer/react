import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext/index";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
