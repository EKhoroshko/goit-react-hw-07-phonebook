import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactItem } from '../../redux/contacts/selectors/selectors';
import { addContactAsync } from '../../redux/contacts/AsyncOperation/asyncOperation';
import css from '../FormSubmit/FormSubmit.module.css';

function FormSubmit({ phone, title }) {
  const dispatch = useDispatch();
  const listConcacts = useSelector(selectContactItem);
  const [name, setName] = useState('');
  const [number, setNumder] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumder = e => {
    setNumder(e.target.value);
  };

  const submitContact = contact => {
    if (!checkContact(contact.name)) {
      dispatch(addContactAsync(contact));
    } else {
      alert(`${contact.name} is alredy in contacts`);
    }
  };

  const checkContact = name => {
    return listConcacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    submitContact(contact);
    setName('');
    setNumder('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <p className={css.description}>{title}</p>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>

      <label className={css.label}>
        <p className={css.description}>{phone}</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChangeNumder}
        />
      </label>
      <button className={css.button} type="submit">
        add contact
      </button>
    </form>
  );
}

FormSubmit.propType = {
  title: PropTypes.string,
  phone: PropTypes.string,
};

export default FormSubmit;
