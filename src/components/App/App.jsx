import React, { useEffect } from 'react';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
}
