var React = require('react');

require('../styles/scoreBoard.css');

function ScoreBoard(props) {
  return (
    <div className="scoreBoard">
      <div className="scoreElement first">
        <h1>Player</h1>
        {props.player.wins}
      </div>
      <div className="scoreElement second">
        <h1>Computer</h1>
        {props.computer.wins}
      </div>
    </div>
  );
}

module.exports = ScoreBoard;
