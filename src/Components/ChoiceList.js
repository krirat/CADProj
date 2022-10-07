import ChoiceButton from "./ChoiceButton";

const ChoiceList = (props) => {
  let currentQuestion = props.question;
  let choices = [];
  currentQuestion.answers.forEach((ans, ansIndex) => {
    let qID = "" + props.qNum + ansIndex;
    choices.push(
      <ChoiceButton
        name={qID}
        risk={ans.riskPts}
        answer={ans.answer}
        qNum={props.qNum}
        change={props.change}
      />
    );
  });
  return choices;
};

export default ChoiceList;
