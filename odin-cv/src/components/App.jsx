import { useState } from "react";
import "../style.css";
import Personal from "./Personal";
import Work from "./Work";

function App() {
  return (
    <>
      <section className="leftSide">
        <div className="personalInfoContainer infoContainer">
          <Personal />
        </div>
        <div className="workInfoContainer infoContainer">
          <Work />
        </div>
      </section>
      <section className="rightSide"></section>
    </>
  );
}

export default App;
