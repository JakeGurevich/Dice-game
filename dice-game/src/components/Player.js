import "./player.css";

const Player = (props) => {
  return (
    <div className="player">
      <p>Now playing :</p>
      <h4> Player {props.currentPl}</h4>
      <h3>{props.currentSum}</h3>
    </div>
  );
};

export default Player;
