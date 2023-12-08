import React, { useState } from 'react';

export default function MyCalendar() {
  //const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [currentDay] = useState(new Date());

  return (
    <div>
      <h1>Calendar Component</h1>
      <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
    </div>
    )
}