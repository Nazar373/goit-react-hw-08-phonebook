import React, { useEffect } from 'react';
// import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
// import Filter from '../filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      {/* <ContactForm /> */}
      <SecondTitle>Contacts</SecondTitle>
      {/* <Filter /> */}
      <ContactList />
    </Container>
  );
}
