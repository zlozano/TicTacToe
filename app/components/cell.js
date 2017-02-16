var React = require('react');

function Cell(props) {
  return (
    <td x={props.x} y={props.y} onClick={props.onCellClick}>
      {props.value}
    </td>
  );
}

module.exports = Cell;
