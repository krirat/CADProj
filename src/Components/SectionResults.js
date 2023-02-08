import React from "react";
import Complications from "./Complications";
import Contact from "./Contact";

const SectionResults = (props) => {
  let riskLevel = 0;
  for (var i in props.GUIDELINES) {
    if (props.risk >= i) {
      riskLevel = props.GUIDELINES[i];
    }
  }

  return (
    <div className="results">
      <div>
        <h1 className="resultsText">
          You have a {riskLevel} risk of having Coronary Artery Disease
        </h1>
      </div>
      <Complications />
      <Contact />
    </div>
  );
};

export default SectionResults;
