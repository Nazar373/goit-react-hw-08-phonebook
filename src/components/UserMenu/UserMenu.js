import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
// import { useAuth } from '../../hooks/useAuth';
import { Box, 
  // Typography, 
  Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // {/*const { user } = useAuth();  */}

  const handleLogOut = () => dispatch(logOut())
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {/* <Typography variant="span">Welcome, {user.name}</Typography> */}
        <Button variant="primary" type="button" onClick={handleLogOut}>Logout</Button>
      </Box>
    </>
  );
};
