import React from "react";

const Search = ({ search, searchTerm }) => {
  const handleSearch = (event) => {
    const inputText = event.target.value;

    search(inputText);
  };

  return (
    <div className="container-1">
      <div>
        <input
          className="input-Search"
          onChange={handleSearch}
          value={searchTerm}
          placeholder="Search a Name.."
        />
      </div>
    </div>
  );
};
export default Search;
