import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    task: {},
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, {payload}) => {
            const {id, value} = payload;
            if (state.task[id]) {
                state.task[id].push(value)
            } else {
                state.task[id] = [value]
            }
        },
        removeTask: (state, {payload}) => {
            const {id, index} = payload;
            state.task[id].splice(index, 1)
        }
    }
})

export const selectTasks = state => state.task;
export const selectTasksId = (state, id) => state.task.task[id];
export const {addTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;