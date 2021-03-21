import "./button.css";
const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      <span>{props.style}</span>
    </button>
  );
};

export default Button;
