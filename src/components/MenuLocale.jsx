import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuLocale = ({ locale, setLocale }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [country, setCountry] = useState('Russia');
  const open = Boolean(anchorEl);
  const locales = [
    { id: 1, locale: 'ru', country: 'Russia' },
    { id: 2, locale: 'en', country: 'United States' },
    { id: 3, locale: 'sk', country: 'Slovakia' },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClickItem = (item) => {
    setLocale(item.locale);
    setCountry(item.country);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu">
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        variant="outlined"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {country}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {locales.map((item) => (
          <MenuItem onClick={() => handleClickItem(item)}>{item.country}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default MenuLocale;
