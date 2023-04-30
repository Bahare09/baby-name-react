import React from "react";
import NameList from "./components/NameList";
import babyNamesData from "./babyNamesData.json";

const App = () => {
  return (
    <div>
      <NameList babyData={babyNamesData} />
    </div>
  );
};

export default App;
