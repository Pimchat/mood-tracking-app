import './navigationSection.css';

const NavigationSection = () => {
    return <div className='navigation-section'>
        <div className='nav-items'>
            <div className='nav-logo'>MOOD TRACKER LOGO</div>
            <div className='nav-header'>My Mood</div>
            <div className='nav-item'>Calendar</div>
            <div className='nav-item'>Dashboard</div>
            <div className='nav-header'>Community</div>
            <div className='nav-item'>Recognition Hub</div>
        </div>
        <div className='logout-btn'>Log Out</div>
    </div>
}
/*
To do: add 'Log Out' button (component) to the bottom of nav section
*/
export default NavigationSection;