import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Hidden, IconButton, Button, Box } from '@mui/material';
import InputIcon from '@mui/icons-material/Input';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar({ isUserLoggedIn, setOpenMobileMenu }) {
  return (
    <AppBar elevation={0}>
      <Toolbar sx={{ height: 64 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          variant="h3"
          color="background.default"
          sx={{
            fontFamily: 'Teko, sans-serif',
          }}
        >
          KeepItUp
        </Link>
        <Box
          sx={{
            flex: '1',
          }}
        ></Box>

        {!isUserLoggedIn && (
          <RouterLink
            to="/login"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <IconButton color="inherit" size="large">
              <InputIcon />
            </IconButton>
          </RouterLink>
        )}

        {isUserLoggedIn && (
          <Hidden mdUp>
            <IconButton
              color="inherit"
              size="large"
              onClick={setOpenMobileMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        )}
      </Toolbar>
    </AppBar>
  );
}