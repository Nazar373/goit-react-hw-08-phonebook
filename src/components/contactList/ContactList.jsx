import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter } from '../../redux/contacts/selectors';
import { deleteContacts } from '../../redux/contacts/operations';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContactsFilter);

  return (
    <List>
      {contactList.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button onClick={() => dispatch(deleteContacts(contact.id))}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
