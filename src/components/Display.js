import React from 'react';

class Display extends React.Component {

  render() {
    const {minute, second} = this.props;
    return (
      <div>
      <div className="display-container">
        <h3>Display</h3>
        <div id="timer-label">{this.props.display}</div>
        <div id="time-left">
        {(minute<10) ? ("0" + minute) : (minute)}
        :
        {(second<10) ? ("0" + second) : (second)}
        </div>
        <i className="far fa-play-circle fa-2x" id="start_stop" onClick={this.props.startOrStop}></i>
        <i className="fas fa-redo fa-2x" id="reset" onClick={this.props.reset}></i>
        </div>
        </div>
           );
  }
}

export default Display;