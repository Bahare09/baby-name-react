import React, { useState } from "react";
import "./NameList.css";

const NameList = (props) => {
  const [searchText, setSearchText] = useState("");
  const [nameList, SetNameList] = useState(props.babyData);
  const [favList, SetFavList] = useState("");
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
  const moveToFavList = (name) => {
    SetFavList(name);
    const filteredData = sortedData.filter((data) => data.name !== name);

    SetNameList(filteredData);
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

      <div className="NameList">
        {filteredData.map((data) => (
          <li
            key={data.id}
            onClick={() => moveToFavList(data.name)}
            style={{ backgroundColor: data.sex === "f" ? "pink" : "blue" }}
          >
            {data.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default NameList;
