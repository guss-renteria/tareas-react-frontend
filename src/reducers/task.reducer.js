import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  tasks: []
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    load_tasks: ( state, action ) => {
      const { tasks } = action.payload;
      state.tasks = tasks;
    },
    add_task: ( state, action ) => {
      const { tasks } = action.payload;
      state.tasks = tasks
    },
    upd_task: ( state, action ) => {
      const { tasks } = action.payload;
      state.tasks = tasks
    },
    del_task: ( state, action ) => {
      const { tasks } = action.payload;
      state.tasks = tasks;
    },
  },
});

export const { load_tasks, add_task, upd_task, del_task } = taskSlice.actions;
