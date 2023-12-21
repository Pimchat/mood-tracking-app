import './newSideBar.css';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { Link } from 'react-router-dom';

export default function NewSideBar() {
    return <div className='sidebar-container'>
        <div className='logo'>
            <LensBlurOutlinedIcon />
            <h3>MOOD TRACKER</h3>
        </div>
        <div className='side-menu'>
            <Link to='/dashboard'>Overview</Link>
            <Link to='/moodtracking'>My Mood Tracker</Link>
            <Link to='/myachievements'>My Achievements</Link>
            <Link to='/testpopup'>Settings</Link>
        </div>
    </div>
};