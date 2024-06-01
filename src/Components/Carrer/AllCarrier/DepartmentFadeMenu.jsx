import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function DepartmentFadeMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (department) => {
    setAnchorEl(null);
    props.onSelectDepartment(department);
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
        Department
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
        <MenuItem onClick={() => handleClose('Software')}>Software</MenuItem>
        <MenuItem onClick={() => handleClose('UI / UX Designer')}>UI / UX Designer</MenuItem>
        <MenuItem onClick={() => handleClose('Word Press Web Developer')}>Word Press Web Developer</MenuItem>
        <MenuItem onClick={() => handleClose('Python web developer')}>Python web developer</MenuItem>
        <MenuItem onClick={() => handleClose('PHP Web Developer')}>PHP Web Developer</MenuItem>
        <MenuItem onClick={() => handleClose('SEO')}>SEO</MenuItem>
      </Menu>
    </div>
  );
}

// PropTypes validation
DepartmentFadeMenu.propTypes = {
  onSelectDepartment: PropTypes.func.isRequired, // Validate onSelectState prop as a required function
};
