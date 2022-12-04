import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterState } from '../../redux/contacts/filterSlice';

import { TextField, Box } from '@mui/material';

 const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    return dispatch(setFilterState(e.currentTarget.value));
  };

  return (
    <Box
      sx={{
        marginTop: 8,
      }}
    >
      <TextField
        id="outlined-name"
        label="Find contacts by name"
        onChange={onChangeFilter}
      />
    </Box>
  );
};

export default Filter