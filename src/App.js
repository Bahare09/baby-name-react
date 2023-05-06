import React from "react";
import Favorite from "./Favorite";
import babyNamesData from "./babyNamesData.json";

const App = () => {
  return (
    <div>
      <Favorite babyData={babyNamesData} />
    </div>
  );
};

export default App;
