import './contentSection.css';
import Dashboard from '../pages/dashboard';

const pageName = "Dashboard";

const ContentSection = () => {
    return <div className='content-section'>
        <h2 className='page-name'>{pageName}</h2>
        <Dashboard />
    </div>
}

export default ContentSection;