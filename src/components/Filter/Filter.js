import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/slice/slice';
import { selectFilter } from '../../redux/contacts/selectors/selectors';
import css from '../Filter/Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={css.conteiner}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

Filter.propType = {
  value: PropTypes.string,
};

export default Filter;
