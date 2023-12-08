import './dashboard.css';
import MyCalendar from '../components/calendar';

const Dashboard = () => {
    return <div className='dashboard'>
        <div className='box1 card'>slider</div>
        <div className='card-container'>
          <div className='box2 card'><MyCalendar /></div>
          <div className='box3 card'>Pie Chart</div>
          <div className='box4 card'>Bar Chart</div>
          <div className='box5 card'>Support</div>
          <div className='box6 card'>Tracking Percentage</div>
          <div className='box7 card'>Overall Mood this month</div>
        </div>
      </div>
}

export default Dashboard;