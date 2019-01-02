(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(14),r=n.n(i),c=(n(22),n(4)),o=n(5),m=n(8),l=n(6),u=n(7),d=n(2),p=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"session-container"},s.a.createElement("h3",null,"Session"),s.a.createElement("p",{id:"session-label"},"Session length:"),s.a.createElement("div",{id:"session-length",value:this.props.sessionLength},this.props.sessionLength),s.a.createElement("p",null,"minutes"),s.a.createElement("i",{id:"session-decrement",onClick:this.props.sessionDecrement,className:"fas fa-2x fa-arrow-circle-down"}),s.a.createElement("i",{id:"session-increment",onClick:this.props.sessionIncrement,className:"fas fa-2x fa-arrow-circle-up"})))}}]),t}(s.a.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.minute,n=e.second;return s.a.createElement("div",null,s.a.createElement("div",{className:"display-container"},s.a.createElement("h3",null,"Display"),s.a.createElement("div",{id:"timer-label"},this.props.display),s.a.createElement("div",{id:"time-left"},t<10?"0"+t:t,":",n<10?"0"+n:n),s.a.createElement("i",{className:"far fa-play-circle fa-2x",id:"start_stop",onClick:this.props.startOrStop}),s.a.createElement("i",{className:"fas fa-redo fa-2x",id:"reset",onClick:this.props.reset}),s.a.createElement("audio",{id:"beep",src:"http://www.pacdv.com/sounds/interface_sound_effects/sound106.wav"})))}}]),t}(s.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"break-container"},s.a.createElement("h3",null,"Break"),s.a.createElement("p",{id:"break-label"},"Break length:"),s.a.createElement("div",{id:"break-length",value:this.props.breakLength},this.props.breakLength),s.a.createElement("p",null,"minutes"),s.a.createElement("i",{id:"break-decrement",onClick:this.props.breakDecrement,className:"fas fa-2x fa-arrow-circle-down"}),s.a.createElement("i",{id:"break-increment",onClick:this.props.breakIncrement,className:"fas fa-2x fa-arrow-circle-up"})))}}]),t}(s.a.Component),g=(n(24),n(30)),f=n(31),k=n(32),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(l.a)(t).call(this))).breakDecrement=function(t){1!==e.state.breakLength?e.setState({breakLength:e.state.breakLength-1}):e.setState({breakLength:e.state.breakLength})},e.breakIncrement=function(t){60!==e.state.breakLength?e.setState({breakLength:e.state.breakLength+1}):e.setState({breakLength:e.state.breakLength})},e.sessionDecrement=function(t){1!==e.state.sessionLength?e.setState({sessionLength:e.state.sessionLength-1},function(){e.setState({convertedRemainingTime:e.state.sessionLength+":00"},function(){var t=e.state.convertedRemainingTime.split(":");e.setState({minute:parseInt(t[0]),second:parseInt(t[1])})})}):e.setState({sessionLength:e.state.sessionLength},function(){e.setState({convertedRemainingTime:e.state.sessionLength+":00"},function(){var t=e.state.convertedRemainingTime.split(":");e.setState({minute:parseInt(t[0]),second:parseInt(t[1])})})})},e.sessionIncrement=function(t){60!==e.state.sessionLength?e.setState({sessionLength:e.state.sessionLength+1},function(){e.setState({convertedRemainingTime:e.state.sessionLength+":00"},function(){var t=e.state.convertedRemainingTime.split(":");e.setState({minute:parseInt(t[0]),second:parseInt(t[1])})})}):e.setState({sessionLength:e.state.sessionLength},function(){e.setState({convertedRemainingTime:e.state.sessionLength+":00"},function(){var t=e.state.convertedRemainingTime.split(":");e.setState({minute:parseInt(t[0]),second:parseInt(t[1])})})})},e.reset=function(t){e.setState({sessionLength:25,breakLength:5,minute:25,second:0})},e.startTimer=function(){0===e.state.minute&&0===e.state.second&&"Session"===e.state.display&&(document.getElementById("beep").play(),e.setState({display:"Break"}),e.setState({convertedRemainingTime:e.state.breakLength+":00"},function(){var t=e.state.convertedRemainingTime.split(":");e.setState({minute:parseInt(t[0]),second:parseInt(t[1])})})),0===e.state.minute&&0===e.state.second&&"Break"===e.state.display&&(document.getElementById("beep").play(),e.setState({display:"Session"}),e.setState({convertedRemainingTime:e.state.sessionLength+":00"},function(){var t=e.state.convertedRemainingTime.split(":");e.setState({minute:parseInt(t[0]),second:parseInt(t[1])})})),0===e.state.second&&(e.setState({minute:e.state.minute-1}),e.setState({second:60})),e.setState({second:e.state.second-1})},e.startOrStop=function(t){if("stopped"===e.state.timerStatus){e.setState({timerStatus:"started"});var n=setInterval(e.startTimer,1e3);e.setState({intervalId:n})}else"started"===e.state.timerStatus&&(e.setState({timerStatus:"stopped"}),clearInterval(e.state.intervalId))},e.state={breakLength:5,sessionLength:25,convertedRemainingTime:0,minute:0,second:0,timerStatus:"stopped",display:"Session"},e.breakDecrement=e.breakDecrement.bind(Object(d.a)(Object(d.a)(e))),e.breakIncrement=e.breakIncrement.bind(Object(d.a)(Object(d.a)(e))),e.sessionDecrement=e.sessionDecrement.bind(Object(d.a)(Object(d.a)(e))),e.sessionIncrement=e.sessionIncrement.bind(Object(d.a)(Object(d.a)(e))),e.reset=e.reset.bind(Object(d.a)(Object(d.a)(e))),e.startOrStop=e.startOrStop.bind(Object(d.a)(Object(d.a)(e))),e.startTimer=e.startTimer.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({convertedRemainingTime:this.state.sessionLength+":00"},function(){var t=e.state.convertedRemainingTime.split(":");e.setState({minute:parseInt(t[0]),second:parseInt(t[1])})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Pomodoro Clock"),s.a.createElement(g.a,null,s.a.createElement(f.a,null,s.a.createElement(k.a,null,s.a.createElement(b,{breakLength:this.state.breakLength,breakDecrement:this.breakDecrement,breakIncrement:this.breakIncrement})),s.a.createElement(k.a,null,s.a.createElement(p,{sessionLength:this.state.sessionLength,sessionDecrement:this.sessionDecrement,sessionIncrement:this.sessionIncrement}))),s.a.createElement(f.a,null,s.a.createElement(k.a,null,s.a.createElement(h,{display:this.state.display,reset:this.reset,minute:this.state.minute,second:this.state.second,startOrStop:this.startOrStop})))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.3061507e.chunk.js.map