const React = require('react');
const styles = require('./styles');

const row = styles.row;
const leftCube = styles.leftCube;
const rightCube = styles.rightCube;
const startText = styles.startText;

const imageFAC = {
  position: 'absolute',
  height: '150px',
  bottom: '20%',
  right: '16vw'
};

const RowThree = React.createClass({
  render: function() {
    return (
      <div style={row}>

      <div style={leftCube}>
      <p style={startText}>
      I'm an alumni of the presitgious Founders & Coders Full Stack Bootcamp. During the course I built projects using Javascript, Node, SQL, TDD, OAuth and APIs.
      </p>
      </div>

      <div style={rightCube}>
      <img style={imageFAC} src="../../images/FAC.png" />
      </div>

      </div>
    )
  }
});

module.exports = RowThree;
