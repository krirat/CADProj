const QuestionsMenu = (props) => {
  let qNum = props.qNum;
  let maxQNum = props.maxQNum;
  let questions = props.qArray;
  let handleClick = props.handleQuestionsMenuClick;
  let items = [];
  for (var i = 0; i < questions.length; i++) {
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

    items.push(<button className={cls} value={i} onClick={handleClick} />);
  }
  return items;
};

export default QuestionsMenu;
