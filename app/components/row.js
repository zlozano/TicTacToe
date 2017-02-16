var React = require('react');
var Cell = require('./cell');

function Row(props) {
  var cells = props.row.map(function(value, index) {
    return (<Cell
      onCellClick={props.onCellClick}
      value={value}
      x={props.rowId}
      y={index}/>);
  });

  return (<tr>{cells}</tr>);
}

module.exports = Row;
