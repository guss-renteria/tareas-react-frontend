import { useRef } from 'react';

import './task_modal.scss';

import AddTask from './modal-content/AddTask';
import UpdTask from './modal-content/UpdTask';

const TaskModal = ({ submit, reference, mode, task, closeTaskModal }) => {
  const form_ref = useRef(null);

  const closeModal = () => {
    closeTaskModal();
    form_ref?.current?.reset();
  }

  // * return MODAL
  return (
    <div id='modal' className='modal' ref={ reference } onClick={ closeModal }>
      { mode === 'add'
        ? <AddTask submit={ submit } form_ref={ form_ref } closeModal={ closeModal } />
        : mode === 'upd'
        ? <UpdTask submit={ submit } form_ref={ form_ref } closeModal={ closeModal } task={ task } />
        : <></>
      }
    </div>
  )
}

export default TaskModal;
