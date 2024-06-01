import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function StateFadeMenu({ onSelectState }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (state) => {
    setAnchorEl(null);
    onSelectState(state);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Select State
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose('Churu')}>Churu</MenuItem>
        <MenuItem onClick={() => handleClose('Jaipur')}>Jaipur</MenuItem>
        <MenuItem onClick={() => handleClose('Kolkata')}>Kolkata</MenuItem>
        <MenuItem onClick={() => handleClose('Uttar Pradesh')}>Uttar Pradesh</MenuItem>
      </Menu>
    </div>
  );
}

// PropTypes validation
StateFadeMenu.propTypes = {
  onSelectState: PropTypes.func.isRequired, // Validate onSelectState prop as a required function
};
