import React from "react";
import react from "react";
import "./Quiz.css";

import SectionBmi from "./Components/SectionBmi";
import SectionMultipleChoice from "./Components/SectionMultipleChoice";
import SectionResults from "./Components/SectionResults";

const QUESTIONS_INFORMATION = [
  {
    prompt: "Gender",
    answers: [
      { answer: "Male", riskPts: 0 },
      { answer: "Female", riskPts: 0 },
    ],
  },
  {
    prompt: "Are you above 60 years old?",
    answers: [
      { answer: "Yes", riskPts: 5 },
      { answer: "No", riskPts: 0 },
    ],
  },
];

const QUESTIONS = [
  {
    prompt: "Do you exercise according to this guideline?",
    answers: [
      { answer: "Yes", riskPts: 0 },
      { answer: "No", riskPts: 5 },
    ],
    extraPrompt: (
      <div className="extraPrompt">
        <p>For</p>
        <p>
          <strong>6-17 y/o: </strong> at least 60 minutes of moderate to
          vigorous exercise 3 times a week
        </p>
        <p>
          <strong>18 y/o and above: </strong> at least 150 minutes of moderate
          exercise 2 times a week
        </p>
      </div>
    ),
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
  0: "low",
};

function Quiz() {
  const [qNum, setQNum] = react.useState(0);
  const [maxQNum, setMaxQNum] = react.useState(0);
  const [risk, setRisk] = react.useState(0);
  const [choiceRisk, setChoiceRisk] = react.useState(0);
  const [checked, setChecked] = react.useState(false);
  const [hidden, setHidden] = react.useState(false);
  const [sectionNumber, setSectionNumber] = react.useState(0);

  const [weight, setWeight] = react.useState(0);
  const [height, setHeight] = react.useState(0);
  const [BMI, setBMI] = react.useState(0);

  const handleChangeChoice = (e) => {
    setChecked(true);
    setChoiceRisk(Number(e.target.value));
  };

  const handleQuestionsMenuClick = (e) => {
    let chosenQNum = Number(e.target.value);
    if (chosenQNum <= maxQNum) setQNum(chosenQNum);
  };

  const handleNext = (qArray) => {
    if (!checked) return;
    if (sectionNumber + 1 >= sections.length) setHidden(true);
    if (qNum + 1 >= qArray.length) {
      setSectionNumber(sectionNumber + 1);
      setQNum(0);
    } else {
      setQNum(qNum + 1);    
    }
    setRisk(risk + choiceRisk);
    setChecked(false);
  };

  const handleSliderChange = (e) => {
    setWeight(Number(e.target.value));
    setChecked(true);
    setBMI(Number(e.target.value) / ((height / 100) ^ 2));
    console.log(`weight: ${weight}, height: ${height}, BMI: ${BMI}`);
  };

  const handleInputChange = (e) => {
    setWeight(Number(e.target.value));
    setChecked(true);
    setBMI(Number(e.target.value) / ((height / 100) ^ 2));
    console.log(`weight: ${weight}, height: ${height}, BMI: ${BMI}`);
  };

  const handleBlur = (e) => {
    if (Number(e.target.value) < 0) {
      setWeight(0);
    } else if (Number(e.target.value) > 300) {
      setWeight(300);
    }
    console.log(`weight: ${weight}, height: ${height}, BMI: ${BMI}`);
  };

  const handleHeightSliderChange = (e) => {
    setHeight(Number(e.target.value));
    setChecked(true);
    setBMI(weight / ((Number(e.target.value) / 100) ^ 2));
    console.log(`weight: ${weight}, height: ${height}, BMI: ${BMI}`);
  };

  const handleHeightInputChange = (e) => {
    setHeight(Number(e.target.value));
    setChecked(true);
    setBMI(weight / ((Number(e.target.value) / 100) ^ 2));
    console.log(`weight: ${weight}, height: ${height}, BMI: ${BMI}`);
  };

  const handleHeightBlur = (e) => {
    if (Number(e.target.value) < 0) {
      setHeight(0);
    } else if (Number(e.target.value) > 300) {
      setHeight(300);
    }
    console.log(`weight: ${weight}, height: ${height}, BMI: ${BMI}`);
  };

  const sections = [
    <SectionMultipleChoice
      className="information"
      qNum={qNum}
      maxQNum={maxQNum}
      qArray={QUESTIONS_INFORMATION}
      handleChangeChoice={handleChangeChoice}
      handleQuestionsMenuClick={handleQuestionsMenuClick}
    />,
    <SectionBmi
      weight={weight}
      height={height}
      BMI={BMI}
      handleHeightSliderChange={handleHeightSliderChange}
      handleHeightInputChange={handleHeightInputChange}
      handleHeightBlur={handleHeightBlur}
      handleSliderChange={handleSliderChange}
      handleInputChange={handleInputChange}
      handleBlur={handleBlur}
    />,
    <SectionMultipleChoice
      className="multipleChoice"
      qNum={qNum}
      maxQNum={maxQNum}
      qArray={QUESTIONS}
      handleChangeChoice={handleChangeChoice}
      handleQuestionsMenuClick={handleQuestionsMenuClick}
    />,
    <SectionResults risk={risk} GUIDELINES={GUIDELINES} />,
  ];

  if (qNum > maxQNum) {
    setMaxQNum(qNum);
  }

  var btnClass;

  if (hidden) {
    btnClass = "nextQuestion hidden";
  } else if (checked) {
    btnClass = "nextQuestion ready";
  } else {
    btnClass = "nextQuestion";
  }

  return (
    <div className="Quiz">
      <div className="quizContainer">{sections[sectionNumber]}</div>
      <button className={btnClass} onClick={handleNext}>
        {" "}
        Next &gt;{" "}
      </button>
    </div>
  );
}

export default Quiz;
