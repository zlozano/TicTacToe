var React = require('react');
var Board = require('../components/board');
var Picker = require('../components/picker');
var TicTacToe = require('../model/tic-tac-toe');
var Player = require('../model/player');
var Computer = require('../model/computer');

var BoardContainer = React.createClass({
  checkGameState: function() {
    if (this.state.board.isOver()) {
      if (!this.state.board.isDraw()) {
        document.getElementById(this.state.board.getWinningState()).style.display = 'inline';
      }
      setTimeout(function() {
        this.props.onGameOver(this.props.player, this.props.computer);
      }.bind(this), 1500);
    } else if (!this.state.isPlayerMove) {
      this.handleComputerTurn();
    }
  },

  handleComputerTurn: function() {
    setTimeout(function() {
      var computer = this.props.computer;
      var board = this.state.board;
      var move = computer.getMove(board);
      if (board.makeMove(move[0], move[1], computer.isPlayer1)) {
        if (board.isOver()) {
          computer.wins = board.isDraw() ? computer.wins : computer.wins + 1;
        }

        this.setState({
          isPlayerMove: true,
          board: board
        }, this.checkGameState);
      }
    }.bind(this), 200);
  },

  handleCellClick: function(e) {
    var player = this.props.player;
    var board = this.state.board;
    var x = e.target.getAttribute('x');
    var y = e.target.getAttribute('y');

    if (this.state.isPlayerMove && board.makeMove(x, y, player.isPlayer1)) {
      if (board.isOver()) {
        player.wins = board.isDraw() ? player.wins : player.wins + 1;
      }

      this.setState({
        isPlayerMove: false,
        board: board
      }, this.checkGameState);
    }
  },

  componentDidMount: function() {
    if (!this.props.player.isPlayer1) {
      this.handleComputerTurn();
    } else {
      this.setState({
        isPlayerMove: true
      });
    }
  },

  getInitialState: function() {
    return {
      board: TicTacToe(),
      isPlayerMove: false
    };
  },

  render: function() {
      return (<Board
        onCellClick={this.handleCellClick}
        board={this.state.board.getBoard()} />);
  }
});

module.exports = BoardContainer;
