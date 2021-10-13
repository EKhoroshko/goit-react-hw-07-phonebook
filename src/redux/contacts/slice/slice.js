import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    isLoading: false,
    items: [],
    error: null,
  },
  reducers: {
    fetchContact: state => ({
      ...state,
      isLoading: true,
    }),
    fetchContactResolve: (state, action) => ({
      ...state,
      isLoading: false,
      items: action.payload,
    }),
    fetchContactReject: (state, action) => ({
      ...state,
      isLoading: false,
      items: [],
      error: action.payload,
    }),

    fetchAddContact: state => ({
      ...state,
      isLoading: true,
    }),
    fetchAddContactResolve: (state, action) => ({
      ...state,
      isLoading: false,
      items: [...state.items, action.payload],
    }),
    fetchAddContactReject: (state, action) => ({
      ...state,
      isLoading: false,
      items: [],
      error: action.payload,
    }),

    fetchRemoveContact: state => ({
      ...state,
      isLoading: true,
    }),
    fetchRemoveContactResolve: (state, action) => ({
      ...state,
      isLoading: false,
      items: state.items.filter(({ id }) => id !== action.payload),
    }),
    fetchRemoveContactReject: (state, action) => ({
      ...state,
      isLoading: false,
      items: [],
      error: action.payload,
    }),
  },
});

const filtration = createSlice({
  name: 'filtration',
  initialState: {
    search: '',
  },
  reducers: {
    filterContacts: (_, { payload }) => ({
      search: payload,
    }),
  },
});

export const {
  fetchContact,
  fetchContactResolve,
  fetchContactReject,
  fetchAddContact,
  fetchAddContactResolve,
  fetchAddContactReject,
  fetchRemoveContact,
  fetchRemoveContactResolve,
  fetchRemoveContactReject,
} = contacts.actions;
export const { filterContacts } = filtration.actions;

export const phoneBook = combineReducers({
  contacts: contacts.reducer,
  filtration: filtration.reducer,
});
