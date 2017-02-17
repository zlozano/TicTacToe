var React = require('react');

function ScoreBoard(props) {
  return (
    <div>
      <div>
        <h2>Player</h2>
        {props.player.wins}
      </div>
      <div>
        <h2>Computer</h2>
        {props.computer.wins}
      </div>
    </div>
  );
}

module.exports = ScoreBoard;
