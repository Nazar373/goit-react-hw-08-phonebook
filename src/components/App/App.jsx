import React from 'react';
import  { useEffect, lazy } from 'react';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element ={<Login />}/>
        </Route>
      </Routes>
      {/* <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />  */}
    </Container>
  );
}
