import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactSlice';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  
  return (
    <List>
      {contactList.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
