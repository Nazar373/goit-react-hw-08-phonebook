import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Box, Typography, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography variant="span">Welcome, {user.name}</Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Button variant="primary" type="button" onClick={handleLogOut}>
          Logout
        </Button>
      </Box>
    </>
  );
};
