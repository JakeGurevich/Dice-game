import "./dice.css";
const Dice = (props) => {
  const classes = ["zero", "one", "two", "three", "four", "five", "six"];
  return (
    <div className="dice">
      {props.results.map((dice, index) => {
        console.log(dice);
        return <div className={classes[dice]} key={index}></div>;
      })}
    </div>
  );
};

export default Dice;
