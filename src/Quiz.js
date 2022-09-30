import React from "react";
import react from "react";
import "./App.css";
import "./Quiz.css";

const INFORMATION = {
  male: false,
  above60: false,
  bmi: 10,
};

const QUESTIONS = [
  {
    prompt: "Do you exercise according to this guideline?",
    answers: [
      { answer: "Yes", riskPts: 0 },
      { answer: "No", riskPts: 5 },
    ],
    extraPrompt: (
      <div className="extraPrompt"> 
        <p>for</p> 
        <p><strong>6-17 y/o: </strong> at least 60 minutes of moderate to vigorous exercise 3 times a week</p>
        <p><strong>18 y/o and above: </strong> at least 150 minutes of moderate exercise 2 times a week</p>
      </div>
    )
  },
  {
    prompt: "Do you often feel lightheaded, dizzy, or short of breath?",
    answers: [
      { answer: "Yes", riskPts: 5 },
      { answer: "No", riskPts: 0 },
    ],
  },
  {
    prompt: "Do you often experience stress?",
    answers: [
      { answer: "Yes", riskPts: 5 },
      { answer: "No", riskPts: 0 },
    ],
  },
  {
    prompt: "How many alcoholic drinks do you have per day?",
    answers: [
      { answer: "Zero", riskPts: 0 },
      { answer: "1 drink", riskPts: 2 },
      { answer: "2 drinks", riskPts: 4 },
      { answer: "At least 3 drinks", riskPts: 5 },
    ],
  },
  {
    prompt: "Do you often smoke or are you exposed to second-hand smoking?",
    answers: [
      { answer: "Yes", riskPts: 5 },
      { answer: "No", riskPts: 0 },
    ],
  },
  {
    prompt:
      "Does your family have a history of Coronary Artery Diesease of any other heart disease?",
    answers: [
      { answer: "Yes", riskPts: 5 },
      { answer: "No", riskPts: 0 },
    ],
  },
  {
    prompt: "Are you part of the African or South Asian ethnic group?",
    answers: [
      { answer: "Yes", riskPts: 5 },
      { answer: "No", riskPts: 0 },
    ],
  },
];

const GUIDELINES = {
  35: "high",
  25: "medium",
  15: "low",
  0: "zero",
};

function Quiz() {
  const [qNum, setQNum] = react.useState(0);
  const [maxQNum, setMaxQNum] = react.useState(0);
  const [risk, setRisk] = react.useState(0);
  const [choiceRisk, setChoiceRisk] = react.useState(0);
  const [checked, setChecked] = react.useState(false);
  const [sectionNumber, setSectionNumber] = react.useState(1);

  let currentQuestion = QUESTIONS[qNum];
  let qPrompt = currentQuestion.prompt;
  let qExtraPrompt = currentQuestion.extraPrompt || null;

  //----- HELPER FUNCTIONS --------------------------------

  const handleChangeChoice = (e) => {
    setChecked(true);
    setChoiceRisk(Number(e.target.value));
  };

  const handleQuestionsMenuClick = (e) => {
    let chosenQNum = Number(e.target.value);
    if (chosenQNum <= maxQNum) setQNum(chosenQNum);
  }

  const handleNext = () => {
    if (!checked) return;
    setQNum(qNum + 1);
    setRisk(risk + choiceRisk);
    setChecked(false);
  }

  const generateChoices = () => {
    let choices = [];
    currentQuestion.answers.forEach((ans, ansIndex) => {
      let qID = "" + qNum + ansIndex;
      choices.push(
        <>
          <input
            key={qID}
            type="radio"
            id={qID}
            name={qNum}
            value={ans.riskPts}
            defaultChecked={false}
            onChange={handleChangeChoice}
          />
          <label htmlFor={qID}> {ans.answer} </label>
        </>
      );
    });
    return choices;
  };

  const generateQuestionsMenu = () => {
    let items = [];
    for (var i = 0; i < QUESTIONS.length; i++) {
      items.push(
          <button className={i <= maxQNum ? "questionsMenuButton active" :"questionsMenuButton"} value={i} onClick={handleQuestionsMenuClick}/>
      );
    }
    return items;
  };

  //----- SECTIONS ----------------------------------------

  const informationSection = <React.Fragment key="iSect"></React.Fragment>;

  const multipleChoiceSection = (
    <React.Fragment key="mSect">
      <p>{qPrompt}</p>
      {qExtraPrompt}
      <div>{generateChoices()}</div>
    </React.Fragment>
  );

  const resultsSection = <React.Fragment key="rSect"></React.Fragment>;

  const sections = [informationSection, multipleChoiceSection, resultsSection];

  //-------------------------------------------------------

  if (qNum > maxQNum) {
    setMaxQNum(qNum);
  }

  return (
    <>
      <div className="quizContainer">{sections[sectionNumber]}</div>
      <footer className="questionsMenu">{generateQuestionsMenu()}</footer>
      <button className={checked ? "nextQuestion active" : "nextQuestion"} onClick={handleNext}> Next &gt; </button>
    </>
  );
}

export default Quiz;
