import { configureStore } from '@reduxjs/toolkit';
import currentDateSlice from './currentDateSlice';
import taskSlice from './taskSlice';

const store = configureStore({
    reducer: {
        currentDate: currentDateSlice,
        task: taskSlice,
    },
});

export default store;
  