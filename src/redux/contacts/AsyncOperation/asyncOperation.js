import {
  fetchContact,
  fetchContactResolve,
  fetchContactReject,
  fetchAddContact,
  fetchAddContactReject,
  fetchRemoveContact,
  fetchRemoveContactReject,
} from '../slice/slice';

export const getPhoneContact = () => async dispatch => {
  dispatch(fetchContact());
  await fetch(`http://localhost:3000/contacts`)
    .then(response => response.json())
    .then(response => dispatch(fetchContactResolve(response)))
    .catch(error => dispatch(fetchContactReject(error.message)));
};

export const addContactAsync = contact => async dispatch => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  };
  dispatch(fetchAddContact());
  const response = await fetch(`http://localhost:3000/contacts`, requestOptions)
    .then(response => response.json())
    .catch(error => dispatch(fetchAddContactReject(error.message)));
  dispatch(getPhoneContact(response));
};

export const removeContactAsync = id => async dispatch => {
  const requestOptions = {
    method: 'DELETE',
  };
  dispatch(fetchRemoveContact());
  const data = await fetch(
    `http://localhost:3000/contacts/${id}`,
    requestOptions,
  )
    .then(response => response.json())
    .catch(error => dispatch(fetchRemoveContactReject(error.message)));
  dispatch(getPhoneContact(data));
};
