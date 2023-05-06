import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    search(inputText);
  };

  return (
    <div className="container-1">
      <div>
        <input
          className="input-Search"
          onChange={handleSearch}
          value={searchText}
          placeholder="Search a Name.."
        />
      </div>
    </div>
  );
};
export default Search;
