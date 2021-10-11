import PropTypes from 'prop-types';
import PhoneItem from '../PhoneItem/PhoneItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactItem,
  selectFilter,
} from '../../redux/contacts/selectors/selectors';
import { getPhoneContact } from '../../redux/contacts/AsyncOperation/asyncOperation';
import css from '../PhoneList/PhoneList.module.css';
import { useEffect } from 'react';

const CreateContactList = ({ title }) => {
  const dispatch = useDispatch();
  const listConcacts = useSelector(selectContactItem);
  const payload = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getPhoneContact());
  }, [dispatch]);

  const filterContact = () => {
    return listConcacts.filter(({ name }) =>
      name.toLowerCase().includes(payload),
    );
  };

  return (
    <section className={css.block}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {filterContact().map(({ id, name, number }) => (
          <PhoneItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </section>
  );
};

CreateContactList.propTypes = {
  title: PropTypes.string,
};

export default CreateContactList;
