var React = require('react');
var Board = require('../components/board');

require('../styles/main.css');

var BoardContainer = React.createClass({
  handleCellClick: function(e) {
    var player = this.state.player;
    var board = this.state.board;
    var x = e.target.getAttribute('x');
    var y = e.target.getAttribute('y');

    if (board[x][y] === '') {
      board[x][y] = player;
      player = player === 'X' ? 'O' : 'X';
      this.setState({
        player: player,
        board: board
      });
    }
  },

  getInitialState: function() {
    return {
      board: [['', '', ''], ['', '', ''], ['', '', '']],
      player: 'X'
    };
  },

  render: function() {
    return (<Board
      onCellClick={this.handleCellClick}
      board={this.state.board} />);
  }
});

module.exports = BoardContainer;
