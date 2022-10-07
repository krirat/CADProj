import ChoiceButton from "./ChoiceButton";

const ChoiceList = (props) => {
  let question = props.question;
  let choices = [];
  question.answers.forEach((ans, ansIndex) => {
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
