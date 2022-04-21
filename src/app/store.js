import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../actions/task.actions';

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
  middleware: [thunk],
});
