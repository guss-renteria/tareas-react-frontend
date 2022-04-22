import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, delTask } from '../../actions/task.actions';

import './tasks.scss';

import AddTaskModal from '../../components/tasks/AddTaskModal';

const Tasks = () => {
  const add_task_modal = useRef(null);
  const dispatch = useDispatch();

  const { tasks } = useSelector(state => state.tasks);

  const addNewTask = e => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    data = {
      ...data,
      next: null,
      tags: data.tags ? data.tags.split(',') : [],
    }

    dispatch(addTask(data));
    e.target.reset();

    add_task_modal?.current?.classList.remove('active');
  }

  const removeTask = id => {
    dispatch(delTask(id));
  }

  const openCreateTask = e => {
    e.preventDefault();
    add_task_modal?.current?.classList.add('active');
  }

  // * return TASKS
  return (
    <>
    <div className='tasks'>
      <div className='task-box'>
        <div className='task-box__header'>
          <h1 className='title'>Tareas</h1>
          <p className='length'>{ tasks && tasks.length }</p>
          <button className='add' onClick={ openCreateTask }>+</button>
        </div>
        <div className='task-box__container'>
          { tasks?.length > 0 ? tasks.map((task, key) => (
            <div key={ key } className='task'>
              <div className='task-title'>
                { task.title }
              </div>
              <div className='task-description'>
                { task.description }
              </div>
              <div className='task-content'>
                { task.content }
              </div>
              <div className='task-tags'>
                { task.tags && task.tags.map((tag, key) => (
                  <div className='tag' key={ key }>{ tag }</div>
                ))}
              </div>
              <div className='task-delete'>
                <button className='update-button'>Actualizar</button>
                <button className='delete-button' onClick={ () => removeTask(task.id) }>Eliminar</button>
              </div>
            </div>
          )) : (
            <div className='task-null'>No hay tareas aun.</div>
          )}
        </div>
      </div>
    </div>
    <AddTaskModal addTask={ addNewTask } reference={ add_task_modal }/>
    </>
  )
}

export default Tasks;
