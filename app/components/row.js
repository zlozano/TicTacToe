var React = require('react');
var Cell = require('./cell');

function Row(props) {
  var cells = props.row.map(function(value, index) {
    var cellKey = 'cell' + props.rowId + index;
    return (<Cell
      key={cellKey}
      onCellClick={props.onCellClick}
      value={value}
      x={props.rowId}
      y={index}/>);
  });

  return (<tr>{cells}</tr>);
}

module.exports = Row;
