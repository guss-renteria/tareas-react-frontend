import './task_content.scss';

const AddTask = ({ submit, form_ref, closeModal }) => {
  // * return ADD TASK
  return (
    <div className='task-content' onClick={ e => e.stopPropagation() }>
      <div className='task__header'>
        <h2>Nueva Tarea</h2>
      </div>
      <form id='add_task_form' ref={ form_ref } action='' method='post' onSubmit={ e => submit(e, {mode:'add'}) }>
        <div className='task-title'>
          <label htmlFor='title'>Titulo:</label>
          <input autoFocus={ true }  required type='text' name='title' maxLength='50'/>
        </div>
        <div className='task-description'>
          <label htmlFor='description'>Descripción:</label>
          <input type='text' name='description' maxLength='80'/>
        </div>
        <div className='task-content'>
          <label htmlFor='content'>Cotenido:</label>
          <textarea name='content' rows='4' maxLength='200'/>
        </div>
        <div className='task-tags'>
          <label htmlFor='tags'>Etiquetas:</label>
          <input type='text' name='tags' maxLength='100'/>
        </div>
        <div className='task-options'>
          <input type='submit' value='agregar'/>
          <input type='button' value='cancelar' onClick={ closeModal }/>
        </div>
      </form>
    </div>
  )
}

export default AddTask;
