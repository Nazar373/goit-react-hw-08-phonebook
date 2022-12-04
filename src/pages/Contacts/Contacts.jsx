import ContactForm from '../../components/contactForm/ContactForm';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import Filter from '../../components/Filter1/Filter';
import { Container, CssBaseline, Box } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Contacts</title>
      </Helmet> */}
      <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <ContactList />
      </Box>
      </Container>
    </>
  );
};

export default Contacts;
