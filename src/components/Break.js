import React from 'react';

class Break extends React.Component {
  render() {
    return (
      <div>
      <div className="break-container">
        <h3>Break</h3>
        <p id="break-label">Break length:</p>
        <div id="break-length" value={this.props.breakLength}>{this.props.breakLength}</div>
        <p>minutes</p>
        <i id="break-decrement" onClick={this.props.breakDecrement} className="fas fa-2x fa-arrow-circle-down"></i>
        <i id="break-increment" onClick={this.props.breakIncrement} className="fas fa-2x fa-arrow-circle-up"></i>
      </div>
      </div>
        );
  }
}

export default Break;