import ChoiceList from "./ChoiceList";
import QuestionsMenu from "./QuestionsMenu";

const SectionMultipleChoice = () => {
  let currentQuestion = QUESTIONS[qNum];
  let qPrompt = currentQuestion.prompt;
  let qExtraPrompt = currentQuestion.extraPrompt || null;

  return (
    <div className="multipleChoice">
      <div>
        <p>{qPrompt}</p>
        {qExtraPrompt}
        <ChoiceList question={currentQuestion} />
      </div>
      <footer className="questionsMenu">
        <QuestionsMenu qArray={QUESTIONS} />
      </footer>
    </div>
  );
};

export default SectionMultipleChoice;
