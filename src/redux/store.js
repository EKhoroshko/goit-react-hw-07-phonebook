import { configureStore } from '@reduxjs/toolkit';
import { phoneBook } from '../redux/contacts/slice/slice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBook,
  },
});
