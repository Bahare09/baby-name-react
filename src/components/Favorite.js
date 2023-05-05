import React, { useState } from "react";
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

  const moveToFavList = (name) => {
    SetFavList([...favList, name]);

    const filteredData = nameList.filter((data) => data.name !== name.name);
    SetNameList(filteredData);
  };
  const unMoveToFavList = (name) => {
    SetNameList([...nameList, name]);

    const filteredData = nameList.filter((data) => data.name !== name.name);
    SetFavList(filteredData);
  };

  return (
    <div>
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

      <div className="NameList">
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
  );
};

export default Favorite;
