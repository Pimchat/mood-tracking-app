import './newTopBar.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';

export default function NewTopBar() {
    return <div className='topbar-container'>
        <h3>PAGE NAME</h3>
        <div className='right-topbar'>
            <NotificationsIcon />
            <AccountCircle />
            <div>Tinky Winky</div>
        </div>
    </div>
};