var TicTacToe = function(_board) {
  var api = {};
  var board = _board || [['', '', ''], ['', '', ''], ['', '', '']];
  var isOver = false;
  var isDraw = false;

  var player1 = 'X';
  var player2 = 'O';

  function checkState(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (board[x][0] === board[x][1] && board[x][0] === board[x][2]) {
      isOver = true;
    } else if (board[0][y] === board[1][y] && board[0][y] === board[2][y]) {
      isOver = true;
    } else if (x === y && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      isOver = true;
    } else if (x + y === 2 && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      isOver = true;
    } else if (api.getAvailableSpaces().length === 0) {
      isOver = true;
      isDraw = true;
    }
  }

  api.makeMove = function(x, y, isPlayer1) {
    if (!isOver && board[x][y] === '') {
      board[x][y] = isPlayer1 ? player1 : player2;
      checkState(x, y);
      return true;
    }
    return false;
  };

  api.getAvailableSpaces = function() {
    var moves = [];
    board.forEach(function(row, i) {
      row.forEach(function(val, j) {
        if (val === '') {
          moves.push([i, j]);
        }
      });
    });
    return moves;
  };

  api.isOver = function() {
    return isOver;
  };

  api.isDraw = function() {
    return isDraw;
  };

  api.getBoard = function() {
    return JSON.parse(JSON.stringify(board));
  };

  return api;
};

module.exports = TicTacToe;
