import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContacts } from '../../redux/operations';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactList = contacts.filter(
    contact => contact.name.toLowerCase()
    .includes(filter)
  );

  return (
    <List>
      {contactList.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : {contact.phone}
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
