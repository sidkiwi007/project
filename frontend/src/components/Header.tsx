import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Header = ({ sections, title, isAuthenticated }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography 
          variant="h6" 
          noWrap 
          component="a" 
          href="/home" 
          sx={{ 
            flexGrow: 1, 
            color: 'black', 
            textDecoration: 'none',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem'
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section.title}
              component={Link}
              to={section.url}
              sx={{ color: 'black' }}  
            >
              {section.title}
            </Button>
          ))}
          {isAuthenticated && (
            <>
              <IconButton
                onClick={handleMenuClick}
                sx={{ color: 'black' }}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
                </MenuItem>
              </Menu>
            </>
          )}
          {!isAuthenticated && (
            <Button
              component={Link}
              to="/login"
              sx={{ color: 'black' }}  
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
