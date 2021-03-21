import React from "react";
import Button from "./Button";
import Player from "./Player";
import "./dice.css";
import Dice from "./Dice";
import InfoCard from "./InfoCard";
import "./game.css";

class Game extends React.Component {
  state = {
    numDice: null,
    rollResults: [],
    currentSum: null,
    sum: null,
    globalScore: null,
    globalScore2: null,
    win: false,
    winScore: 20,
    nextPlayer: false,
  };

  randomDice = (numDice) => {
    const rollResults = [];
    let same = 0;
    let currentSum = 0;
    let sum = this.state.sum;
    let globalScore = this.state.globalScore;
    let globalScore2 = this.state.globalScore2;
    for (let i = 0; i < numDice; i++) {
      rollResults[i] = Math.floor(Math.random() * 6 + 1);
      console.log(rollResults[i]);
      if (rollResults[i] === 6) {
        same++;
      }
      sum += rollResults[i];
      currentSum += rollResults[i];
    }
    // if (!this.state.nextPlayer) {
    //   globalScore = sum;
    //   this.setState({ globalScore });
    // } else {
    //   globalScore2 += sum;
    //   this.setState({ globalScore2 });
    // }
    if (same !== numDice) {
      this.setState({
        numDice,
        rollResults,
        currentSum,
        sum,
      });
    } else {
      this.setState({ sum: null, globalScore: null, nextPlayer: true });
    }
    if (
      sum >= this.state.winScore ||
      globalScore + sum >= this.state.winScore ||
      globalScore2 + sum >= this.state.winScore
    ) {
      console.log("win");
      this.setState({ win: true });
    }

    // thids.setState
  };
  resetPlayer = (next) => {
    this.setState({
      rollResults: [],
      currentSum: null,
      sum: null,
      nextPlayer: next,
    });
  };
  holdResults = () => {
    console.log(this.state.sum);
    console.log(this.state.nextPlayer);
    let globalScore = this.state.globalScore;
    let globalScore2 = this.state.globalScore2;
    if (!this.state.nextPlayer) {
      globalScore += this.state.sum;
      this.setState({ globalScore });
    } else {
      globalScore2 += this.state.sum;
      this.setState({ globalScore2 });
    }
    let next = this.state.nextPlayer;
    next ? (next = false) : (next = true);
    this.resetPlayer(next);
    console.log(this.state.nextPlayer);
  };
  inputHandler = (e) => {
    this.setState({ winScore: e.target.value });
    console.log(e.target.value);
  };

  render() {
    console.log(this.state.rollResults);
    console.log(this.state.sum);

    return (
      <div className="container">
        <input
          value={this.state.winScore}
          onChange={(e) => this.inputHandler(e)}
        />
        <Button onClick={() => this.randomDice(2)} style="Roll Dice" />
        <Button onClick={() => this.holdResults()} style="Hold" />
        <div className="game">
          <div className="player">
            <Player
              currentPl={this.state.nextPlayer ? "2" : "1"}
              currentSum={this.state.sum}
            />
          </div>
          <div className="dice">
            <Dice results={this.state.rollResults} />
          </div>

          <div className="info">
            <div className="currentInfo">
              <div className="current">Current : {this.state.currentSum}</div>
              <div className="targetScore">
                Target Score : {this.state.winScore}
              </div>
            </div>

            <InfoCard
              p1={this.state.globalScore}
              p2={this.state.globalScore2}
            />
          </div>

          <div>{this.state.win ? "You won !" : null}</div>
        </div>
      </div>
    );
  }
}

export default Game;
