import QuestionsMenu from "./QuestionsMenu";
import ChoiceList from "./ChoiceList";

const SectionMultipleChoice = (props) => {
  let qArray = props.qArray;
  let qNum = props.qNum;
  let maxQNum = props.maxQNum;
  let question = qArray[qNum];
  let qPrompt = question.prompt;
  let qExtraPrompt = question.extraPrompt || null;

  let handleChangeChoice = props.handleChangeChoice;
  let handleQuestionsMenuClick = props.handleQuestionsMenuClick;

  return (
    <div className={props.className}>
      <div>
        <p>{qPrompt}</p>
        {qExtraPrompt}
        <ChoiceList
          question={question}
          qNum={qNum}
          change={handleChangeChoice}
        />
      </div>
      <footer className="questionsMenu">
        <QuestionsMenu
          qArray={qArray}
          qNum={qNum}
          maxQNum={maxQNum}
          handleQuestionsMenuClick={handleQuestionsMenuClick}
        />
      </footer>
    </div>
  );
};

export default SectionMultipleChoice;
