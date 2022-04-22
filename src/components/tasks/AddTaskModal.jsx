import './add_task_modal.scss';

const AddTaskModal = ({ addTask, reference }) => {
  const closeModal = e => {
    e.stopPropagation();
    const modal = document.querySelector('.add-task-modal');
    document.getElementById('add_task_form').reset();
    modal.classList.remove('active');
  }

  // * return ADD TASK MODAL
  return (
    <div className='add-task-modal' ref={ reference } onClick={ closeModal }>
      <section className='task-modal' onClick={ e=>e.stopPropagation() }>
        <div className='task__header'>
          <h2>Nueva Tarea</h2>
        </div>
        <form id='add_task_form' action='' method='post' onSubmit={ addTask }>
          <div className='task-title'>
            <label htmlFor='title'>Titulo:</label>
            <input required type='text' name='title' maxLength='50'/>
          </div>
          <div className='task-description'>
            <label htmlFor='description'>Descripción:</label>
            <input type='text' name='description' maxLength='60'/>
          </div>
          <div className='task-content'>
            <label htmlFor='content'>Cotenido:</label>
            <textarea name='content' rows='4'/>
          </div>
          <div className='task-tags'>
            <label htmlFor='tags'>Etiquetas:</label>
            <input type='text' name='tags'/>
          </div>
          <div className='task-add'>
            <input type='submit' value='agregar'/>
            <input type='button' value='cancelar' onClick={ closeModal }/>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddTaskModal;
