import { startOfMonth, getDaysInMonth, getDay, addMonths, subMonths } from 'date-fns';
import { useState } from "react";
import './calendar.css';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
type Day = 'Su' | 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa';

interface CalendarConfig {
  startDay: number;
  month: number;
  year: number;
  daysInMonth: number;
}

const daysInWeek: Day[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const months: Month[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getCalendarConfig(date: Date): CalendarConfig { //to be revised
  const monthStart = startOfMonth(date);
  const daysInMonth = getDaysInMonth(monthStart);
  const year = monthStart.getFullYear();
  const month = monthStart.getMonth();
  const startDay = getDay(monthStart);

  return {
    startDay: startDay,
    month: month,
    year: year,
    daysInMonth: daysInMonth
  };
}

function dayTemplate() {
  const divs = daysInWeek.map((_, i) => <div>{daysInWeek[i]}</div>);

  return divs;
}

function dateTemplate(date: Date) {
  const CalendarConfig = getCalendarConfig(date);
  const numberOfBox = 42;

  const startDay = CalendarConfig.startDay;
  let divs = Array.from({ length: startDay }).map((_, i) => <div key={'preday' + i}></div>); //to be revised

  const numberOfDay = CalendarConfig.daysInMonth;
  Array.from({ length: numberOfDay }).map((_, i) => divs.push(<div key={'day' + i}>{i+1}</div>));
  
  const dayLeft = numberOfBox - numberOfDay - startDay;
  Array.from({ length: dayLeft }).map((_, i) => divs.push(<div key={'postday' + i}></div>));

  return divs;
}

function monthYearTemplate(date: Date) {
  const CalendarConfig = getCalendarConfig(date);
  const month = months[CalendarConfig.month];
  const year = CalendarConfig.year;

  return <div>{month} {year}</div>;
}

export default function MyCalendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const onMonthForward = () => {
    const nextMonth = addMonths(currentDate, 1);
    setCurrentDate(nextMonth);
  }

  const onMonthBackward = () => {
    const prevMonth = subMonths(currentDate, 1);
    setCurrentDate(prevMonth);
  }

  return (
    <div>
      <div className='month-container'>
        <div onClick={onMonthBackward}><ArrowLeftIcon /></div>
        {monthYearTemplate(currentDate)}
        <div onClick={onMonthForward}><ArrowRightIcon /></div>
      </div>
      <div className='date-container'>
        {dayTemplate()}
        {dateTemplate(currentDate)}
      </div>
    </div>
  )
}