import QuestionsMenu from "./QuestionsMenu";
import ChoiceList from "./ChoiceList";

const SectionMultipleChoice = (props) => {
  let qArray = props.qArray;
  let qIndex = props.qIndex;
  let maxQIndex = props.maxQIndex;
  let question = qArray[qIndex];
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
          qIndex={qIndex}
          change={handleChangeChoice}
        />
      </div>
      <footer className="questionsMenu">
        <QuestionsMenu
          qArray={qArray}
          qIndex={qIndex}
          maxQIndex={maxQIndex}
          handleQuestionsMenuClick={handleQuestionsMenuClick}
        />
      </footer>
    </div>
  );
};

export default SectionMultipleChoice;
