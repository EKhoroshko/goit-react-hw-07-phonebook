import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContactAsync } from '../../redux/contacts/AsyncOperation/asyncOperation';
import css from '../PhoneItem/PhoneItem.module.css';

function PhoneItem({ id, name, number }) {
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(removeContactAsync(id));
  };

  return (
    <li className={css.item}>
      <p>{name}</p>: <p className={css.text}>{number}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

PhoneItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default PhoneItem;
