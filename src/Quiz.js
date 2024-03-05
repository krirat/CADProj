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
    prompt: "Do you often feel your heart rapidly pumping, shaking, or aching while doing physical activities?",
    answers: [
      { answer: "Yes", riskPts: 5 },
      { answer: "No", riskPts: 0 },
    ]
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
  30: "high",
  15: "medium",
  0: "low",
};

const GUIDELINES_BMI = {
  30: { level: "Obese", riskPts: 5 },
  25: { level: "Overweight", riskPts: 2 },
  18: { level: "Healthy", riskPts: 0 },
  0: { level: "Underweight", riskPts: 0 }
}

function Quiz() {
  const [qIndex, setQIndex] = react.useState(0);
  const [maxQIndex, setMaxQIndex] = react.useState(0);
  const [risk, setRisk] = react.useState(0);
  const [choiceRisk, setChoiceRisk] = react.useState(0);
  const [hasMadeChoice, setHasMadeChoice] = react.useState(false);
  const [nextQuestionButtonHidden, setNextQuestionButtonHidden] = react.useState(false);
  const [sectionIndex, setSectionIndex] = react.useState(0);
  const [weight, setWeight] = react.useState(0);
  const [height, setHeight] = react.useState(0);
  const [BMI, setBMI] = react.useState(0);

  //------------------------------------------------------------
  //MULTIPLE CHOICE SECTION: EVENT HANDLERS & HELPER FUNCTIONS
  //------------------------------------------------------------

  const handleChangeChoice = (e) => {
    setHasMadeChoice(true);
    setChoiceRisk(Number(e.target.value));
  };

  const handleQuestionsMenuClick = (e) => {
    let chosenQIndex = Number(e.target.value);
    if (chosenQIndex <= maxQIndex) setQIndex(chosenQIndex);
  };

  const nextSection = () => {
    setSectionIndex(sectionIndex + 1);
    setQIndex(0);
    setMaxQIndex(0);
  }

  const nextQuestion = () => {
    setQIndex(qIndex + 1);
  }

  const handleNextQuestionButtonClicked = () => {
    if (!hasMadeChoice) return;

    let currentSectionQArray = sections[sectionIndex].props.qArray;
    let sectionIsComplete = currentSectionQArray == null || qIndex + 1 >= currentSectionQArray.length;

    if (sectionIsComplete) {
      nextSection();
    } else {
      nextQuestion();
    }

    setRisk(risk + choiceRisk);
    setHasMadeChoice(false);
  };

  //------------------------------------------------------------
  //BMI SECTION: EVENT HANDLERS & HELPER FUNCTIONS
  //------------------------------------------------------------

  const calculateBMI = () => {
    return Number((weight / ((height / 100) ** 2)).toFixed(1));
  }

  const handleBMIRisk = (riskPts) => {
    setChoiceRisk(riskPts)
  }

  const handleWeightChange = (e) => {
    setWeight(Number(e.target.value));
    setHasMadeChoice(true);
    setBMI(calculateBMI);
  };

  const handleWeightBlur = (e) => {
    if (Number(e.target.value) < 0) {
      setWeight(0);
    } else if (Number(e.target.value) > 300) {
      setWeight(300);
    }

    setBMI(calculateBMI);
  };


  const handleHeightChange = (e) => {
    setHeight(Number(e.target.value));
    setHasMadeChoice(true);
    setBMI(calculateBMI);
  };

  const handleHeightBlur = (e) => {
    if (Number(e.target.value) < 0) {
      setHeight(0);
    } else if (Number(e.target.value) > 300) {
      setHeight(300);
    }
    setBMI(calculateBMI);
  };

  //------------------------------------------------------------
  //RENDERING SECTIONS
  //------------------------------------------------------------

  const sections = [
    <SectionMultipleChoice
      className="information"
      qIndex={qIndex}
      maxQIndex={maxQIndex}
      qArray={QUESTIONS_INFORMATION}
      handleChangeChoice={handleChangeChoice}
      handleQuestionsMenuClick={handleQuestionsMenuClick}
    />,
    <SectionBmi
      weight={weight}
      height={height}
      BMI={BMI}
      GUIDELINES_BMI={GUIDELINES_BMI}
      handleHeightChange={handleHeightChange}
      handleHeightBlur={handleHeightBlur}
      handleWeightChange={handleWeightChange}
      handleWeightBlur={handleWeightBlur}
      handleBMIRisk={handleBMIRisk}
    />,
    <SectionMultipleChoice
      className="multipleChoice"
      qIndex={qIndex}
      maxQIndex={maxQIndex}
      qArray={QUESTIONS}
      handleChangeChoice={handleChangeChoice}
      handleQuestionsMenuClick={handleQuestionsMenuClick}
    />,
    <SectionResults
      risk={risk}
      GUIDELINES={GUIDELINES}
    />,
  ];

  var nextQuestionButtonClass;
  var quizIsComplete = sectionIndex + 1 >= sections.length && !nextQuestionButtonHidden;

  if (qIndex > maxQIndex) {
    setMaxQIndex(qIndex);
  }

  if (quizIsComplete) setNextQuestionButtonHidden(true);

  if (nextQuestionButtonHidden) {
    nextQuestionButtonClass = "nextQuestion hidden";
  } else if (hasMadeChoice) {
    nextQuestionButtonClass = "nextQuestion ready";
  } else {
    nextQuestionButtonClass = "nextQuestion";
  }

  return (
    <div className="Quiz">
      <div className="quizContainer">{sections[sectionIndex]}</div>
      <button className={nextQuestionButtonClass} onClick={handleNextQuestionButtonClicked}>
        {" "}Next &gt;{" "}
      </button>
    </div>
  );
}

export default Quiz;
