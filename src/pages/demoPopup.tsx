import { useState } from "react";
import Popup from '../components/popup';
import BasicPopover from '../components/popover'
import './demoPopup.css';

export default function DemoPopup() {
    const [xPos, setXPosition] = useState(0);
    const [yPos, setYPosition] = useState(0);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const onPageClicked = (event: React.MouseEvent) => {
        setXPosition(event.clientX);
        setYPosition(event.clientY);
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div className='demo-container' onClick={onPageClicked}>Demo Popup Page
        <Popup xPosition={xPos} yPosition={yPos} />
        <button onClick={handleClick}>Click to open Popover</button>
        <BasicPopover anchorEl={anchorEl} onCloseEvent={handleClose} />
    </div>
}