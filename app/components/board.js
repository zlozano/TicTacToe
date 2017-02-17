var React = require('react');
var Row = require('./row');

function Board(props) {
  var rows = props.board.map(function(row, rowId) {
    var rowKey = 'row' + rowId;
    return (<Row
      key={rowKey}
      onCellClick={props.onCellClick}
      row={row}
      rowId={rowId}/>);
  });

  return (<table><tbody>{rows}</tbody></table>);
}

module.exports = Board;
