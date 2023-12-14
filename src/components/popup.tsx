import './popup.css';

interface PopupProps {
    xPosition: number;
    yPosition: number;
}

export default function Popup({xPosition, yPosition}: PopupProps) {
    return <div className='popup-container'>
        This is popup component.
    <pre>
        x position: {xPosition}<br/>
        y position: {yPosition}
    </pre>
    </div>
};