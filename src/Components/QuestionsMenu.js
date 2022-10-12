const QuestionsMenu = (props) => {
  let qIndex = props.qIndex;
  let maxQIndex = props.maxQIndex;
  let questions = props.qArray;
  let handleClick = props.handleQuestionsMenuClick;
  let items = [];
  for (var i = 0; i < questions.length; i++) {
    var cls;
    if (i < qIndex) {
      cls = "questionsMenuButton ready";
    } else if (i === qIndex) {
      cls = "questionsMenuButton ready chosen";
    } else if (i > qIndex && i <= maxQIndex) {
      cls = "questionsMenuButton ready notChosen";
    } else {
      cls = "questionsMenuButton";
    }

    items.push(<button className={cls} value={i} onClick={handleClick} />);
  }
  return items;
};

export default QuestionsMenu;
