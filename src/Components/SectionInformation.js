import QuestionsMenu from "./QuestionsMenu";
import ChoiceList from "./ChoiceList";

const SectionInformation = (props) => {
  let qNum = props.qNum;
  let question = props.question;
  let qPrompt = question.prompt;
  let qArray = props.qArray;
  let handleChangeChoice = props.handleChangeChoice;
  
  return (
    <div className="information">
      <div>
        <p>{qPrompt}</p>
        <ChoiceList question={question} qNum={qNum} change={handleChangeChoice} />
      </div>
      <footer className="questionsMenu">
        <QuestionsMenu qArray={qArray} />
      </footer>
    </div>
  );
};

export default SectionInformation;
