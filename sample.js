import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CottageIcon from '@mui/icons-material/Cottage';
import { Button, Typography, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const AnimatedBox = styled(Box)`
  transition: transform 0.3s ease-in-out;
`;

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu(!menu);
  }

  return (
    <AppBar position='static' sx={{background:'#4b0082'}}>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CottageIcon />
        </IconButton>
        <Typography variant='h6' component='div'>
          DreamHome
        </Typography>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            marginLeft: 'auto',
          }}
        >
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Project</Button>
          <Button color='inherit'>About</Button>
        </Box>
        <AnimatedBox
          sx={{
            display: { xs: 'flex', md: 'none' },
            marginLeft: 'auto',
            // transform: menu ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <IconButton size='large' color='inherit' onClick={showMenu}>
            <MenuIcon />
          </IconButton>
          { menu ? (
            <Menu  
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            anchorReference="anchorPosition" 
            anchorPosition={{ top: 70,left:650 }} 
            open={menu} onClose={() => setMenu(false)}
            sx={{
              display: { xs: 'flex', md: 'none' }}}>
              <MenuItem>
                <Button color='inherit'>Home</Button>
              </MenuItem>
              <MenuItem>
                <Button color='inherit'>Project</Button>
              </MenuItem>
              <MenuItem>
                <Button color='inherit'>About</Button>
              </MenuItem>
            </Menu>
          ) : null}
        </AnimatedBox>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;