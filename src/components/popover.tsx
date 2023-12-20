import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';

interface PopoverProps {
    anchorEl: HTMLElement | null;
    onCloseEvent: () => void;
}

export default function BasicPopover({ anchorEl, onCloseEvent }: PopoverProps) {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onCloseEvent}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}