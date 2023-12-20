import { startOfMonth, getDaysInMonth, getDay, addMonths, subMonths } from 'date-fns';
import { useState } from "react";
import './calendar.css';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import BasicPopover from './popover';

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

function dateItems(date: Date) {
  const CalendarConfig = getCalendarConfig(date);
  const startDay = CalendarConfig.startDay;
  const numberOfDay = CalendarConfig.daysInMonth;

  const numberOfBox = (startDay + numberOfDay) > 35 ? 42 : 35; //number of date box in a calendar of each month
  const dayLeft = numberOfBox - numberOfDay - startDay;

  const items: string[] = [];

  Array.from({ length: startDay }).map((_, i) => items.push('preday' + i));
  Array.from({ length: numberOfDay }).map((_, i) => items.push((i + 1).toString()));
  Array.from({ length: dayLeft }).map((_, i) => items.push('postday' + i));

  return items;
}

function monthYearTemplate(date: Date) {
  const CalendarConfig = getCalendarConfig(date);
  const month = months[CalendarConfig.month];
  const year = CalendarConfig.year;

  return <div>{month} {year}</div>;
}

export default function MyCalendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const dateArray = dateItems(currentDate);

  const onMonthForward = () => {
    const nextMonth = addMonths(currentDate, 1);
    setCurrentDate(nextMonth);
  }

  const onMonthBackward = () => {
    const prevMonth = subMonths(currentDate, 1);
    setCurrentDate(prevMonth);
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className='month-container'>
        <div onClick={onMonthBackward}><ArrowLeftIcon /></div>
        {monthYearTemplate(currentDate)}
        <div onClick={onMonthForward}><ArrowRightIcon /></div>
      </div>
      <div className='date-container'>
        {dayTemplate()}
        {dateArray.map((item) => 
        <div key={item} onClick={handleClick}>{item.includes('preday') || item.includes('postday') ? '' : item}</div>)}
        <BasicPopover anchorEl={anchorEl} onCloseEvent={handleClose} />
      </div>
    </div>
  )
}