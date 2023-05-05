import React from "react";
//import NameList from "./components/NameList";
import babyNamesData from "./babyNamesData.json";
import Favorite from "./components/Favorite";

const App = () => {
  return (
    <div>
      <Favorite babyData={babyNamesData} />
    </div>
  );
};

export default App;
