import React, { useState } from "react";
import Search from "./Search";
import "./App.css";
const Favorite = (props) => {
  const sortedData = props.babyData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const [nameList, SetNameList] = useState(sortedData);
  const [favList, SetFavList] = useState("");
  const [searchList, SetSearchList] = useState(sortedData);
  const [searchTerm, SetSearchTerm] = useState("");

  const moveToFavList = (name) => {
    SetFavList([...favList, name]);

    const filteredData = nameList.filter((data) => data.name !== name.name);
    SetNameList(filteredData);
  };
  const unMoveToFavList = (name) => {
    SetNameList(
      [...nameList, name].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    );

    const filteredData = favList.filter((data) => data.name !== name.name);
    SetFavList(filteredData);
  };
  const search = (input) => {
    const filteredList = nameList.filter((data) =>
      data.name.toLowerCase().includes(input.toLowerCase())
    );
    SetNameList(filteredList);
    SetSearchList(filteredList);
    SetSearchTerm(input);
  };

  const boyHandler = () => {
    const boyList = searchList.filter((data) => data.sex === "m");
    SetNameList(boyList);
  };

  const girlHandler = () => {
    const girlList = searchList.filter((data) => data.sex === "f");
    SetNameList(girlList);
  };

  const mixHandler = () => {
    SetNameList(searchList);
  };
  const reloadHandler = () => {
    SetNameList(sortedData);
    SetSearchTerm("");
  };

  return (
    <div className="container">
      <div>
        <div className="search-button">
          <div className="reload">
            <button onClick={reloadHandler}>Reload</button>
          </div>
          <Search search={search} searchTerm={searchTerm} />
          <button onClick={boyHandler}>Boy</button>
          <button onClick={girlHandler}>Girl</button>
          <button onClick={mixHandler}>Mix</button>
        </div>
        <div className="fav-name">
          <p>Favorites:</p>
          {favList &&
            favList.map((data) => (
              <li
                key={data.id}
                onClick={() => unMoveToFavList(data)}
                style={{ backgroundColor: data.sex === "f" ? "pink" : "blue" }}
              >
                {data.name}
              </li>
            ))}
        </div>

        <div className="name-list">
          {nameList.map((data) => (
            <li
              key={data.id}
              onClick={() => moveToFavList(data)}
              style={{ backgroundColor: data.sex === "f" ? "pink" : "blue" }}
            >
              {data.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
