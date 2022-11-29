import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/operations';
import { Form, Label, Input } from './ContactForm.styled';

const initialFormState = {
  name: '',
  phone: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'input text':
      console.log('actionInCase', action);
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};
export default function ContactForm() {
  const disp = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === formState.name)) {
      alert('a contact with this name is already registered');
      return;
    } else if (contacts.find(contact => contact.phone === formState.phone)) {
      alert(`${formState.phone} is already in contacts.`);
      return;
    }
    disp(addContacts(formState));
  };

  const handleTextChange = (e) => {
    dispatch({
      type: "input text",
      field: e.target.name,
      payload: e.target.value
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={(e) => handleTextChange(e)}
          value={formState.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={(e) => handleTextChange(e)}
          value={formState.phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
}
