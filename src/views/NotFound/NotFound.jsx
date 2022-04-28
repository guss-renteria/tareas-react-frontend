import {Link} from 'react-router-dom';
import './not_found.scss';

const NotFound = () => {
  // * return NOT FOUND
  return (
    <div className='not-found'>
      <h1>[404] ruta no encontrada.</h1>
      <p>vuelve a la app&nbsp;
        <Link to='/'>
          Tareas
        </Link>
        .</p>
    </div>
  )
}

export default NotFound;
