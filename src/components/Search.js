import React, { useState } from "react";
import "./NameList.css";

const Search = ({ search }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    search(inputText);
  };

  return (
    <div className="container">
      <div className="input-Search">
        <input
          onChange={handleSearch}
          value={searchText}
          placeholder="Search a Name.."
        />
      </div>
    </div>
  );
};
export default Search;
