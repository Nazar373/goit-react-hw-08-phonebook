import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContacts } from '../../redux/contacts/operations';
// import { Form, Label, Input } from './ContactForm.styled';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const initialFormState = {
  name: '',
  phone: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'input text':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'clear text':
      return {
        name: '',
        phone: '',
      };
    default:
      return state;
  }
};
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formState, setFormState] = useReducer(formReducer, initialFormState);

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === formState.name)) {
      alert('a contact with this name is already registered');
      return;
    } else if (contacts.find(contact => contact.phone === formState.phone)) {
      alert(`${formState.phone} is already in contacts.`);
      return;
    }
    dispatch(addContacts(formState));
    setFormState({
      type: 'clear text',
      name: '',
      phone: '',
    });
  };

  const handleTextChange = e => {
    setFormState({
      type: 'input text',
      field: e.target.name,
      payload: e.target.value,
    });
  };
  return (
    <>
      <Typography component="h1" variant="h5">
        Add contact
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          onChange={e => handleTextChange(e)}
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          type="text"
          autoFocus
        />
        <TextField
          onChange={e => handleTextChange(e)}
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone"
          type="tel"
          id="phone"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
      </>
  );
};

export default ContactForm;
