var React = require('react');
var Picker = require('../components/picker');
var ScoreBoard = require('../components/scoreBoard');
var BoardContainer = require('./BoardContainer');

var Player = require('../model/player');
var Computer = require('../model/computer');

var MainContainer = React.createClass({
  handlePlayerSelection: function(e) {
    var selection = e.target.value;
    var player = this.state.player;
    var computer = this.state.computer;

    player.isPlayer1 = selection === 'X';
    computer.isPlayer1 = !player.isPlayer1;

    this.setState({
      player: player,
      computer: computer,
      gameOver: false
    });
  },

  handleGameOver: function(player, computer) {
    this.setState({
      player: player,
      computer: computer,
      gameOver: true
    });
  },

  getInitialState: function() {
    return {
      player: new Player(),
      computer: new Computer(),
      gameOver: true
    };
  },

  render: function() {
    var scoreBoard = <ScoreBoard player={this.state.player} computer={this.state.computer} />;
    if (this.state.gameOver) {
      return (
        <div>
          {scoreBoard}
          <Picker onPickerChange={this.handlePlayerSelection} />
        </div>
      );
    } else {
      return (
        <div>
          {scoreBoard}
          <BoardContainer
            onGameOver={this.handleGameOver}
            player={this.state.player}
            computer={this.state.computer}/>
        </div>
      );
    }

  }
});

module.exports = MainContainer;
