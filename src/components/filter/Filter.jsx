import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterState } from '../../redux/contacts/filterSlice';

import TextField from '@mui/material/TextField';



const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    return dispatch(setFilterState(e.currentTarget.value));
  };

  return (
    // <Label>
    //   Find contacts by name
    //   <Input
    //    type="text" onChange={onChangeFilter}></Input>
    // </Label>
    <TextField
      id="outlined-name"
      label="Find contacts by name"
      onChange={onChangeFilter}
    />
  );
};

export default Filter;
