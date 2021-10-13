import {
  fetchContact,
  fetchContactResolve,
  fetchContactReject,
  fetchAddContact,
  fetchAddContactResolve,
  fetchAddContactReject,
  fetchRemoveContact,
  fetchRemoveContactResolve,
  fetchRemoveContactReject,
} from '../slice/slice';

export const getPhoneContact = () => async dispatch => {
  dispatch(fetchContact());
  try {
    await fetch(`http://localhost:3000/contacts`)
      .then(response => response.json())
      .then(response => dispatch(fetchContactResolve(response)));
  } catch (error) {
    dispatch(fetchContactReject(error.message));
  }
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
  try {
    const data = await fetch(
      `http://localhost:3000/contacts`,
      requestOptions,
    ).then(response => response.json());
    dispatch(fetchAddContactResolve(data));
  } catch (error) {
    dispatch(fetchAddContactReject(error.message));
  }
};

export const removeContactAsync = id => async dispatch => {
  const requestOptions = {
    method: 'DELETE',
  };
  dispatch(fetchRemoveContact());
  try {
    await fetch(`http://localhost:3000/contacts/${id}`, requestOptions).then(
      response => response.json(),
    );
    dispatch(fetchRemoveContactResolve(id));
  } catch (error) {
    dispatch(fetchRemoveContactReject(error.message));
  }
};
