var React = require('React');

require('../styles/picker.css');

function Picker(props) {

  function pickerClick(e) {
    var i;
    var elem = e.target;
    var options = elem.parentElement.children;
    if (elem.className === 'init') {
      for (i = 0; i < options.length; i++) {
        if (options[i].className !== 'init') {
          var display = options[i].style.display || 'none';
          options[i].style.display = display === 'none' ? 'block' : 'none';
        }
      }
    } else {
      props.onPickerChange(elem);
    }
  }

  return (
    <div className="pickerContainer">
      <ul className="picker" onClick={pickerClick}>
        <li className="init">Pick a player</li>
        <li data-value="X">Player One (X)</li>
        <li data-value="O">Player Two (O)</li>
      </ul>
    </div>
  );
}

module.exports = Picker;
