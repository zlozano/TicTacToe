var React = require('react');
var Row = require('./row');

require('../styles/board.css');

function Board(props) {
  var rows = props.board.map(function(row, rowId) {
    var rowKey = 'row' + rowId;
    return (<Row
      key={rowKey}
      onCellClick={props.onCellClick}
      row={row}
      rowId={rowId}/>);
  });

  return (
    <div>
      <div style={{zIndex: 1}} className="board">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
      <div className="board">
        <svg className="svg" xmlns="http://www.w3.org/2000/svg">
          <path id="diagonalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M0,0 l450,450"/>
          <path id="secondaryDiagonalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M430,0 l-430,430"/>
          <path id="leftVerticalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M55,0 l0,450"/>
          <path id="centerVerticalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M215,0 l0,450"/>
          <path id="rightVerticalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M376,0 l0,450"/>
          <path id="topHorizontalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M0,55 l450,0"/>
          <path id="centerHorizontalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M0,215 l450,0"/>
          <path id="bottomHorizontalWin" className="path" fill="#FFFFFF" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M0,375 l450,0"/>
        </svg>
      </div>
    </div>
  );
}

module.exports = Board;
