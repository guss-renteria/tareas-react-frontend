import './task_content.scss';

const UpdTask = ({ submit, form_ref, closeModal, task }) => {
  // * return UPD TASK
  return (
    <div className='task-content' onClick={ e => e.stopPropagation() }>
      <div className='task__header'>
        <h2>Actualizar Tarea</h2>
      </div>
      <form id='upd_task_form' ref={ form_ref } action='' method='post' onSubmit={ e => submit(e, {mode:'upd', id: task.id}) }>
        <div className='task-title'>
          <label htmlFor='title'>Titulo:</label>
          <input autoFocus={ true } type='text' name='title' maxLength='50' defaultValue={ task.title }/>
        </div>
        <div className='task-description'>
          <label htmlFor='description'>Descripción:</label>
          <input type='text' name='description' maxLength='80' defaultValue={ task.description }/>
        </div>
        <div className='task-content'>
          <label htmlFor='content'>Cotenido:</label>
          <textarea name='content' rows='4' maxLength='200' defaultValue={ task.content }/>
        </div>
        <div className='task-tags'>
          <label htmlFor='tags'>Etiquetas:</label>
          <input type='text' name='tags' maxLength='100' defaultValue={ task.tags.join(', ') }/>
        </div>
        <div className='task-options'>
          <input type='submit' value='actualizar'/>
          <input type='button' value='cancelar' onClick={ closeModal }/>
        </div>
      </form>
    </div>
  )
}

export default UpdTask;
