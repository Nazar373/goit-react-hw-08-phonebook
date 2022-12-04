import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter } from '../../redux/contacts/selectors';
import { deleteContacts } from '../../redux/contacts/operations';

import { List, ListItem, ListItemText, Button } from '@mui/material';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContactsFilter);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {contactList.map(contact => (
        <ListItem
          key={contact.id}
          disableGutters
        >
          <ListItemText>
            {contact.name}: {contact.number}
          </ListItemText>
          <Button variant="text" onClick={() => dispatch(deleteContacts(contact.id))}>
           Delete
           </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
