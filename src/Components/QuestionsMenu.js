const QuestionsMenu = (props) => {
  let qIndex = props.qIndex;
  let maxQIndex = props.maxQIndex;
  let questions = props.qArray;
  let handleClick = props.handleQuestionsMenuClick;
  let questionButtons = [];

  for (var buttonIndex = 0; buttonIndex < questions.length; buttonIndex++) {
    var _className;
    const buttonIndexBeforeCurrentQuestion = buttonIndex < qIndex;
    const buttonIndexOnCurrentQuestion = buttonIndex === qIndex;
    const buttonIndexPastCurrentQuestion = buttonIndex > qIndex && buttonIndex <= maxQIndex;

    if (buttonIndexBeforeCurrentQuestion) {
      _className = "questionsMenuButton ready";
    } else if (buttonIndexOnCurrentQuestion) {
      _className = "questionsMenuButton ready chosen";
    } else if (buttonIndexPastCurrentQuestion) {
      _className = "questionsMenuButton ready notChosen";
    } else { //if the button is assigned to a question that has not been reached
      _className = "questionsMenuButton";
    }

    questionButtons.push(<button className={_className} value={buttonIndex} onClick={handleClick} />);
  }
  return questionButtons;
};

export default QuestionsMenu;
