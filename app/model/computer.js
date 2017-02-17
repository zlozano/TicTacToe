var Player = require('./player');
var TicTacToe = require('./tic-tac-toe');
var Computer = function() {};

Computer.prototype = Object.create(Player.prototype);

Computer.prototype.getMove = function(ticTacToe) {
  if (ticTacToe.getAvailableSpaces().length == 9) {
    return [0, 0];
  }
  return alphaBeta.bind(this)(ticTacToe);
};

function alphaBeta(node) {
  if (this.isPlayer1) {
    return maximizing.bind(this)(-11, 11, node, 0)[1];
  } else {
    return minimizing.bind(this)(-11, 11, node, 0)[1];
  }
}

function minimizing(alpha, beta, node, depth) {
  if (node.isOver()) {
    return [scoreBoard(node, true, depth)];
  }

  var minimizing_move;
  var value = 11;
  var moves = node.getAvailableSpaces();
  for (var i = 0; i < moves.length; i++) {
    var boardCopy = JSON.parse(JSON.stringify(node.getBoard()));
    var child = TicTacToe(boardCopy);
    child.makeMove(moves[i][0], moves[i][1], false);
    var opponent = maximizing(alpha, beta, child, depth + 1)[0];
    if (opponent <= value) {
      minimizing_move = moves[i];
      value = opponent;
    }
    beta = Math.min(beta, value);
    if (alpha > beta) {
      break;
    }
  }
  return [value, minimizing_move];
}

function maximizing(alpha, beta, node, depth) {
  if (node.isOver()) {
    return [scoreBoard(node, false, depth)];
  }
  var maximizing_move;
  var value = -11;
  var moves = node.getAvailableSpaces();
  for (var i = 0; i < moves.length; i++) {
    var boardCopy = JSON.parse(JSON.stringify(node.getBoard()));
    var child = TicTacToe(boardCopy);
    child.makeMove(moves[i][0], moves[i][1], true);
    var opponent = minimizing(alpha, beta, child, depth + 1)[0];
    if (opponent >= value) {
      maximizing_move = moves[i];
      value = opponent;
    }
    alpha = Math.max(alpha, value);
    if (alpha > beta) {
      break;
    }
  }
  return [value, maximizing_move];
}

function scoreBoard(node, win, depth) {
  if (node.isDraw()) {
    return 0;
  } else if (win) {
    return 10 - depth;
  } else {
    return depth - 10;
  }
}

module.exports = Computer;
