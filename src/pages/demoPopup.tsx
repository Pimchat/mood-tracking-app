import { useState } from "react";
import Popup from '../components/popup';
import './demoPopup.css';

export default function DemoPopup() {
    const [xPos, setXPosition] = useState(0);
    const [yPos, setYPosition] = useState(0);

    const onPageClicked = (event: React.MouseEvent) => {
        setXPosition(event.clientX);
        setYPosition(event.clientY);
    }
    return <div className='demo-container' onClick={onPageClicked}>Demo Popup Page
        <Popup xPosition={xPos} yPosition={yPos} />
    </div>
}