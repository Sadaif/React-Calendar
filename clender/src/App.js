import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Clender from './components/Clender';
import Target from './components/Target';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        date:Date.now(),
        selectionStart: 0,
        selectionEnd: 0
    }
}
prevMonth(){
    let date = new Date(this.state.date);
    date.setMonth(date.getMonth() - 1);
    this.setState({date:date.getTime()});
}
nextMonth(){
    let date = new Date(this.state.date);
    date.setMonth(date.getMonth() + 1);
    this.setState({date:date.getTime()});
}
setRange(selectionStart = 0, selectionEnd = 0){
    this.setState({selectionStart, selectionEnd});
}
  render() {
    let {date , selectionStart , selectionEnd} = this.state;
    return (
      <div>
       <Target dateFrom={selectionStart} dateTo={selectionEnd} /> 
       <Header date={date} prevMonth={this.prevMonth.bind(this)} nextMonth={this.nextMonth.bind(this)} />
       <Clender  date={date}
                     indexStart = {selectionStart}
                     indexEnd = { selectionEnd}
                     setRange = {this.setRange.bind(this)} />
      </div>
    );
  }
}

export default App;
