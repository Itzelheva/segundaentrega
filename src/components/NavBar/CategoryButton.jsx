import { NavLink, Link } from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

 const CategoryButton = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="category-button">
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
    
        
      >
        Categorías
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
        <MenuItem onClick={handleClose}>
          <NavLink to={`/category/Alimento`} className="nav-link">Alimento</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <NavLink to={`/category/Arena`} className="nav-link">Arena</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <NavLink to={`/category/Juguetes`} className="nav-link">Juguetes</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <NavLink to={`/category/Tazones`} className="nav-link">Tazones</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <NavLink to={`/category/Camas`} className="nav-link">Camas</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <NavLink to={`/category/Torres`} className="nav-link">Torres</NavLink>
        </MenuItem>

      </Menu>
    </div>
  );
}

export default CategoryButton;