import React from "react";
import react from "react";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import "./Quiz.css";

const INFORMATION = {
  male: false,
  above60: false,
  bmi: 0,
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
  15: "low",
  0: "zero",
};

function Quiz() {
  const [qNum, setQNum] = react.useState(0);
  const [maxQNum, setMaxQNum] = react.useState(0);
  const [risk, setRisk] = react.useState(0);
  const [choiceRisk, setChoiceRisk] = react.useState(0);
  const [checked, setChecked] = react.useState(false);
  const [sectionNumber, setSectionNumber] = react.useState(0);

  const [weight, setWeight] = react.useState(0);
  const [height, setHeight] = react.useState(0);
  const [BMI, setBMI] = react.useState(0);

  let currentQuestion = QUESTIONS[qNum];
  let qPrompt = currentQuestion.prompt;
  let qExtraPrompt = currentQuestion.extraPrompt || null;

  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          root: {
            "& .MuiSlider-colorPrimary": {
              backgroundColor: "#48695c",
            },
            "& .MuiSlider-barColorSecondary": {
              backgroundColor: "#48695c",
            },
            "& .MuiSlider-thumbColorPrimary": {
              backgroundColor: "#48695c",
            },
          },
        },
      },
    },
  });

  //----- HELPER FUNCTIONS --------------------------------

  const handleChangeChoice = (e) => {
    setChecked(true);
    setChoiceRisk(Number(e.target.value));
  };

  const handleQuestionsMenuClick = (e) => {
    let chosenQNum = Number(e.target.value);
    if (chosenQNum <= maxQNum) setQNum(chosenQNum);
  };

  const handleNext = () => {
    if (!checked) return;
    if (sectionNumber === 0) {
      setSectionNumber(1);
      setChecked(false);
    } else if (sectionNumber === 1) {
      setQNum(qNum + 1);
      setRisk(risk + choiceRisk);
      setChecked(false);
    } else {
    }
  };

  const handleSliderChange = (e) => {
    setWeight(Number(e.target.value));
    setChecked(true);
    setBMI(weight / ((height / 100) ^ 2));
  };

  const handleInputChange = (e) => {
    setWeight(Number(e.target.value));
    setChecked(true);
    setBMI(weight / ((height / 100) ^ 2));
  };

  const handleBlur = (e) => {
    if (Number(e.target.value) < 0) {
      setWeight(0);
    } else if (Number(e.target.value) > 300) {
      setWeight(300);
    }
  };
  const handleHeightSliderChange = (e) => {
    setHeight(Number(e.target.value));
    setChecked(true);
    setBMI(weight / ((height / 100) ^ 2));
  };

  const handleHeightInputChange = (e) => {
    setHeight(Number(e.target.value));
    setChecked(true);
    setBMI(weight / ((height / 100) ^ 2));
  };

  const handleHeightBlur = (e) => {
    if (Number(e.target.value) < 0) {
      setHeight(0);
    } else if (Number(e.target.value) > 300) {
      setHeight(300);
    }
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
      var cls;
      if (i < qNum) {
        cls = "questionsMenuButton ready";
      } else if (i === qNum) {
        cls = "questionsMenuButton ready chosen";
      } else if (i > qNum && i <= maxQNum) {
        cls = "questionsMenuButton ready notChosen";
      } else {
        cls = "questionsMenuButton";
      }

      items.push(
        <button className={cls} value={i} onClick={handleQuestionsMenuClick} />
      );
    }
    return items;
  };

  //----- SECTIONS ----------------------------------------

  const informationSection = (
    <React.Fragment key="iSect">
      <div>
        <p>Height (cm):</p>
        <ThemeProvider theme={theme}>
          <Slider
            value={typeof height === "number" ? height : 0}
            onChange={handleHeightSliderChange}
            aria-labelledby="input-slider"
            className="Slider"
          />
        </ThemeProvider>
        <Input
          value={height}
          size="small"
          onChange={handleHeightInputChange}
          onBlur={handleHeightBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 300,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <p>Weight (kg):</p>
        <Slider
          value={typeof weight === "number" ? weight : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          className="Slider"
        />
        <Input
          value={weight}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 300,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </div>
      <p>BMI = {BMI}</p>
    </React.Fragment>
  );

  const multipleChoiceSection = (
    <div className="multipleChoice">
      <div>
        <p>{qPrompt}</p>
        {qExtraPrompt}
        <div>{generateChoices()}</div>
      </div>
      <footer className="questionsMenu">{generateQuestionsMenu()}</footer>
    </div>
  );

  const resultsSection = <React.Fragment key="rSect">yay</React.Fragment>;

  const sections = [informationSection, multipleChoiceSection, resultsSection];

  //-------------------------------------------------------

  if (qNum > maxQNum) {
    setMaxQNum(qNum);
  }

  return (
    <>
      <div className="quizContainer">{sections[sectionNumber]}</div>
      <button
        className={checked ? "nextQuestion ready" : "nextQuestion"}
        onClick={handleNext}
      >
        {" "}
        Next &gt;{" "}
      </button>
    </>
  );
}

export default Quiz;
