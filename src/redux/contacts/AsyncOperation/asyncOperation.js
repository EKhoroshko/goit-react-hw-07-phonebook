import {
  fetchContact,
  fetchContactResolve,
  fetchContactReject,
} from '../slice/slice';

export const getPhoneContact = () => async dispatch => {
  dispatch(fetchContact());
  const data = await fetch(`http://localhost:3000/contacts`)
    .then(response => response.json())
    .catch(error => dispatch(fetchContactReject(error.message)));
  dispatch(fetchContactResolve(data));
};

export const addContactAsync = contact => async dispatch => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  };
  dispatch(fetchContact());
  const response = await fetch(`http://localhost:3000/contacts`, requestOptions)
    .then(response => response.json())
    .catch(error => dispatch(fetchContactReject(error.message)));
  dispatch(getPhoneContact(response));
};

export const removeContactAsync = id => async dispatch => {
  const requestOptions = {
    method: 'DELETE',
  };
  dispatch(fetchContact());
  const data = await fetch(
    `http://localhost:3000/contacts/${id}`,
    requestOptions,
  )
    .then(response => response.json())
    .catch(error => dispatch(fetchContactReject(error.message)));
  dispatch(getPhoneContact(data));
};
