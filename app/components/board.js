var React = require('react');
var Row = require('./row');

function Board(props) {
  var rows = props.board.map(function(row, rowId) {
    return (<Row
      onCellClick={props.onCellClick}
      row={row}
      rowId={rowId}/>);
  });

  return (<table>{rows}</table>);
}

module.exports = Board;
