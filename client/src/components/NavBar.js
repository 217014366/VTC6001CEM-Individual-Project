import React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Lock, Menu } from '@mui/icons-material';
import icon from '../../src/icons8-life-60.png';

import { useValue } from '../context/ContextProvider';
import UserIcons from './user/UserIcons';
import Sidebar from './sidebar/Sidebar'

const NavBar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <IconButton size="large" color="inherit" onClick={()=>setIsOpen(true)}>
                <Menu />
              </IconButton>
            </Box>
            <img src={icon} alt='icon' width={40} height={40}/><span>&nbsp;&nbsp;</span>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              Livability
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Livability
            </Typography>
            {!currentUser ? (
              <Button
                color="inherit"
                startIcon={<Lock />}
                onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
              >
                Login
              </Button>
            ) : (
              <UserIcons />
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Sidebar {...{isOpen,setIsOpen}}/>
    </>
  );
};

export default NavBar;
