import { startOfMonth, getDaysInMonth, getDay } from 'date-fns';
import './calendar.css';

type month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
type day = 'Su' | 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa';

interface calendarConfig {
  startDay: number;
  month: number;
  year: number;
  daysInMonth: number;
}

const daysInWeek: day[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const months: month[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const todayDate = new Date(2112, 8, 3);
console.log('input date : ', todayDate);

function getCalendarConfig(date: Date): calendarConfig {
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

function calendarTemplate(date: Date) {
  const calendarConfig = getCalendarConfig(date);
  const numberOfBox = 42; 

  const startDay = calendarConfig.startDay;
  let divs = Array.from({ length: startDay }).map((_, i) => <div></div>);

  const numberOfDay = calendarConfig.daysInMonth;
  Array.from({ length: numberOfDay }).map((_, i) => divs.push(<div>{i+1}</div>));
  
  const dayLeft = numberOfBox - numberOfDay - startDay;
  Array.from({ length: dayLeft }).map((_, i) => divs.push(<div></div>));

  return divs;
}

function monthTemplate(date: Date) {
  const calendarConfig = getCalendarConfig(date);
  const month = months[calendarConfig.month];
  const year = calendarConfig.year;

  return <div>{month} {year}</div>;
}

export default function MyCalendar() {
  return (
    <div>
      <div className='month-container'>
        <div> left arrow </div>
        {monthTemplate(todayDate)}
        <div> right arrow </div>
      </div>
      <div className='date-container'>
        {dayTemplate()}
        {calendarTemplate(todayDate)}
      </div>
    </div>
  )
}