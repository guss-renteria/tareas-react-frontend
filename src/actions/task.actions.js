import axios from 'axios';
import { taskSlice, load_tasks, add_task, upd_task, del_task } from '../reducers/task.reducer';

const BASE_URL = 'https://tareas-nodejs-backend.herokuapp.com';

const getTasks = async () => {
    try{
        const response = await axios.get(`${ BASE_URL }/tasks`);
        const tasks = response.data;
        return tasks;
    }catch(err) {
        console.log(err);
    }
}

export const loadTasks = () => async (dispatch) => {
  try {
    const tasks = await getTasks();
    dispatch(load_tasks({tasks}));
  }catch(e) {
    console.log(`[-] ${ e }`);
  }
}
export const addTask = (task) => async (dispatch) => {
  try {
    await axios.post(`${ BASE_URL }/tasks`, {
      ...task
    });
    const tasks = await getTasks();
    dispatch(add_task({tasks}));
  }catch(e) {
    console.log(`[-] ${ e }`);
  }
}
export const updTask = (id, task) => async (dispatch) => {
  try {
    await axios.put(`${ BASE_URL }/task/${ id }`, {
      ...task
    });
    const tasks = await getTasks();
    dispatch(upd_task({tasks}));
  }catch(e) {
    console.log(`[-] ${ e }`);
  }
}
export const delTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`${ BASE_URL }/task/${ id }`);

    const tasks = await getTasks();
    dispatch(del_task({tasks}));
  }catch(e) {
    console.log(`[-] ${ e }`);
  }
}

export default taskSlice.reducer
