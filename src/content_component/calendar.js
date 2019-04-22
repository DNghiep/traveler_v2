import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function renderDay(day) {
  const date = day.getDate();
  const cellStyle = {
    height: 40,
    width: 95,
    position: 'relative',
    // chỗ này để chính size từng ô
  };
  return (
    <div style={cellStyle}>
      {date}
    </div>
  );
}

class Calendar extends Component{
  render(){
    return <DayPicker renderDay={renderDay}/>;
  }
}

export default Calendar;
