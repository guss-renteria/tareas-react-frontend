import { useSelector } from 'react-redux';

import './tasks.scss';

const Tasks = () => {
  const { tasks } = useSelector(state => state.tasks);

  // * return TASKS
  return (
    <div className='tasks'>
      <div className='task-box'>
        <div className='task-box__header'>
          <h1 className='title'>Tareas</h1>
          <p className='length'>{tasks && tasks.length}</p>
          <button className='add'>+</button>
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
                <button className='delete-button'>Eliminar</button>
              </div>
            </div>
          )) : (
            <div className='task-null'>No hay tareas aun.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tasks;
