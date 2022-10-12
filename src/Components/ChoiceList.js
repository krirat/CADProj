import ChoiceButton from "./ChoiceButton";

const ChoiceList = (props) => {
  let question = props.question;
  let choices = [];
  question.answers.forEach((ans, ansIndex) => {
    let qID = "" + props.qIndex + ansIndex;
    choices.push(
      <ChoiceButton
        name={qID}
        risk={ans.riskPts}
        answer={ans.answer}
        qIndex={props.qIndex}
        change={props.change}
      />
    );
  });
  return choices;
};

export default ChoiceList;
