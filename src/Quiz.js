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

  //----- HELPER FUNCTIONS --------------------------------

  const handleChangeChoice = (c) => {
    setChecked(true);
    setChoiceRisk(Number(c.target.value));
  };

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
        <>
          <input
            key={i}
            type="radio"
            id={i}
            name="questionItems"
            value={i}
            defaultChecked={i === 0}
            onChange={handleChangeChoice}
          />
          <label htmlFor={i}> </label>
        </>
      );
    }
    return items;
  };

  //----- SECTIONS ----------------------------------------

  const informationSection = <></>;

  const multipleChoiceSection = (
    <>
      <p>{qPrompt}</p>
      <div>{generateChoices()}</div>
      <button
        className="nextQuestion"
        onClick={() => {
          if (checked) {
            setQNum(qNum + 1);
            setRisk(risk + choiceRisk);
            setChecked(false);
          }
        }}
      >
        Next &gt;
      </button>
    </>
  );

  const resultsSection = <></>;

  const sections = [informationSection, multipleChoiceSection, resultsSection];

  //-------------------------------------------------------

  if (qNum > maxQNum) {
    setMaxQNum(qNum);
  }

  return (
    <>
      <div className="quizContainer">{sections[sectionNumber]}</div>
      <footer className="questionsMenu">{generateQuestionsMenu()}</footer>
    </>
  );
}

export default Quiz;
