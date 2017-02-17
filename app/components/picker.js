var React = require('React');

function Picker(props) {
  return (
    <select onChange={props.onPickerChange}>
      <option>Pick a Sign</option>
      <option>X</option>
      <option>O</option>
    </select>
  );
}

module.exports = Picker;
