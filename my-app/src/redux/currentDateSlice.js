import {createSlice} from '@reduxjs/toolkit';

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = (currentDate.getMonth() + 1)
let day = currentDate.getDate();

const initialState = {
    year,
    month,
    day,
};

const currentDateSlice = createSlice({
    name: 'dates',
    initialState,
    reducers: {
        addDates: (state, {payload}) => {
            state.year = payload.year;
            state.month = payload.month;
            state.day = payload.month;
        },
        addYear: (state, {payload}) => {
            state.year = payload.year;
        },
        addMonth: (state, {payload}) => {
            state.month = payload.month;
        },
        addDay: (state, {payload}) => {
            state.day = payload.day;
        }
    }
})

export const selectCurrentDate = state => state.currentDate;
export const {addDates, addYear, addMonth, addDay} = currentDateSlice.actions;
export default currentDateSlice.reducer