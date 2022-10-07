const ChoiceButton = (props) => {
  return (
    <>
      <input
        key={props.name}
        type="radio"
        id={props.name}
        name={props.qNum}
        value={props.risk}
        defaultChecked={false}
        onChange={props.change}
      />
      <label htmlFor={props.name}> {props.answer} </label>
    </>
  );
};

export default ChoiceButton;
