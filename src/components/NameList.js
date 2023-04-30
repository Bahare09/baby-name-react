import React, { useState } from "react";
import "./NameList.css";

const NameList = (props) => {
  const [searchText, setSearchText] = useState("");
  const sortedData = props.babyData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const filteredData = sortedData.filter((data) =>
    data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <div className="input-Search">
        <input
          onChange={handleSearch}
          value={searchText}
          placeholder="Search a Name.."
        />
      </div>

      <div className="NameList">
        {filteredData.map((data) => (
          <p
            key={data.id}
            style={{ backgroundColor: data.sex === "f" ? "pink" : "blue" }}
          >
            {data.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NameList;
