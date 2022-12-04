import ContactForm from '../../components/contactForm/ContactForm';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import Filter from '../../components/Filter/Filter';

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
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
};

export default Contacts;
