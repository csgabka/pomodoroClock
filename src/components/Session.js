import React from 'react';

class Session extends React.Component {
  render() {
    return (
      <div>
      <div className="session-container">
        <h3>Session</h3>
        <p id="session-label">Session length:</p>
        <div id="session-length" value={this.props.sessionLength}>{this.props.sessionLength}</div>
        <p>minutes</p>
        <i id="session-decrement" onClick={this.props.sessionDecrement} className="fas fa-2x fa-arrow-circle-down"></i>
        <i id="session-increment" onClick={this.props.sessionIncrement} className="fas fa-2x fa-arrow-circle-up"></i>
        </div>
      </div>
           );
  }
}

export default Session;