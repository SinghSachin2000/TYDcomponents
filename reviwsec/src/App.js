import React from "react";
import Info from './Components/Info'
import reviews from "./data";
const App = () => {
  return (
    <div>
         <Info reviews={reviews}></Info>
    </div>
  );
};

export default App;
