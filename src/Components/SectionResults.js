import Complications from './Complications';
import Contact from './Contact';

const SectionResults = () => {
    let riskLevel = 0;
    for (var i in GUIDELINES) {
      if (risk >= i) {
        riskLevel = GUIDELINES[i];
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
