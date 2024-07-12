import { configureStore } from '@reduxjs/toolkit';
import currentDateSlice from './currentDateSlice';

const store = configureStore({
    reducer: {
        currentDate: currentDateSlice,
    },
});

export default store;
  