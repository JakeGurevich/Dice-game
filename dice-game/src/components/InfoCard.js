import "./info.css";
const InfoCard = (props) => {
  return (
    <div className="info">
      <h2>Player 1 Total Score : {props.p1}</h2>
      <h2>Player 2 Total Score : {props.p2}</h2>
    </div>
  );
};
export default InfoCard;
