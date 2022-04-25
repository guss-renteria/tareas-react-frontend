import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, delTask, updTask } from '../../actions/task.actions';

import './tasks.scss';

import TaskModal from '../../components/TaskModal';
import Footer from '../../components/Footer/Footer';

const Tasks = () => {
  const modal_reference = useRef(null);
  const [modal_props, setModalProps] = useState({mode: null, task: {}});
  const dispatch = useDispatch();

  const { tasks } = useSelector(state => state.tasks);

  // * evento al disparar una accion que incluya la base de datos
  const submit = (e, { mode, id }) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    let new_data = {};

    switch(mode) {
      case 'add':
        let tag_split = data.tags.split(',');
        tag_split = tag_split.map(tag => tag.trim());

        new_data = {
          ...data,
          next: null,
          tags: data.tags ? tag_split : [],
        }
        dispatch(addTask(new_data));
        break;

      case 'upd':
        const task_def = tasks.find(t => t.id === id);

        for(let key in data) {
          if(task_def[key] !== data[key] && (key !== 'tags')) {
            new_data[key] = data[key];

          }else if(key === 'tags') {
            let tag_split = data[key].split(',');
            tag_split = tag_split.map(tag => tag.trim());

            if(task_def[key] !== tag_split) {
              if(tag_split[0] !== '')
                new_data[key] = tag_split;
              else
                new_data[key] = [];
            }
          }
        }

        if(Object.keys(new_data).length > 0)
          dispatch(updTask(id, new_data));

        // eslint-disable-next-line
      default:
        break;
    }

    e.target.reset();
    setModalProps({mode: null, tasks: {}});

    modal_reference?.current?.classList.remove('active');
  }

  const removeTask = id => {
    dispatch(delTask(id));
  }

  const openTaskModal = (e, mode, task={}) => {
    e.preventDefault();
    switch(mode) {
      case 'add':
        setModalProps({mode, task});
        modal_reference?.current?.classList.add('active');
        break;
      case 'upd':
        setModalProps({mode, task});
        modal_reference?.current?.classList.add('active');
        break;
      default:
        break;
    }
  }
  const closeTaskModal = () => {
    modal_reference?.current?.classList.remove('active');
    setModalProps({mode: null, tasks: {}});
  }

  // * return TASKS
  return (
    <>
    <div className='tasks'>
      <div className='task-box'>
        <div className='task-box__header'>
          <h1 className='title'>Tareas</h1>
          <p className='length'>{ tasks && tasks.length }</p>
          <button className='add' onClick={ e => openTaskModal(e, 'add') }> <span className='icon-plus-circle'></span></button>
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
              <div className='task-options'>
                <button className='update-button' onClick={ e => openTaskModal(e, 'upd', task)}>Actualizar</button>
                <button className='delete-button' onClick={ () => removeTask(task.id) }>Eliminar <span className='icon-times-circle'></span></button>
              </div>
            </div>
          )) : (
            <div className='task-null'>No hay tareas aun.</div>
          )}
        </div>
      </div>
      <div className='task-info'>
        <div className='icon-warning'></div>
        <p>Esta app fue creada por guss-renteria con la libreria&nbsp;
          de 'React', esta app puede controlar una 'REST API' creada con&nbsp;
          'express' en el lenguage de javascript. Para tener un mejor control cada 10&nbsp;
          tareas se reinicia la base de datos.
        </p>
        {/* eslint-disable-next-line */}
        <a href='https://github.com/guss-renteria/tareas-nodejs-backend' target='_blank' rel='noreferrer noopener'>
          código de la 'REST API'
        </a>
      </div>
    </div>
    <Footer />
    <TaskModal submit={ submit } reference={ modal_reference } mode={ modal_props.mode } task={modal_props.task} closeTaskModal={ closeTaskModal } />
    </>
  )
}

export default Tasks;
