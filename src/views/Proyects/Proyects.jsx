import Footer from '../../components/Footer/Footer';

import './proyects.scss';

import mi_portafolio_img from '../../images/mi-portafolio.png';
import juego_de_la_vida_img from '../../images/juego-de-la-vida.png';
import mi_neovim_img from '../../images/mi-neovim.png';
import tasks_img from '../../images/react-app-tareas.png';

const Proyects = () => {
  // * return PROYECTS
  return (
    <>
    <div className='proyects'>
      <div className='proyects-title'>
        <h1>Mas proyectos.</h1>
        {/* eslint-disable-next-line */}
        <a href='https://github.com/guss-renteria' target='_blank' rel='noreferrer noopener'>
          <span className='icon-github-alt'></span>
        </a>
      </div>
      <div className='proyect-cards'>
        <div className='card'>
          <div className='card-title'><span className='icon-folder'></span>&nbsp;mi-portafolio.</div>
          <div className='card-image'>
            <img src={ mi_portafolio_img } alt='tasks'/>
          </div>
          {/* eslint-disable-next-line */}
          <a href='https://github.com/guss-renteria/mi-protafolio' target='_blank' rel='noreferrer noopener' className='card-code dark icon-github-alt'></a>
        </div>
        <div className='card'>
          <div className='card-title'><span className='icon-folder'></span>&nbsp;mi-neovim</div>
          <div className='card-image'>
            <img src={ mi_neovim_img } alt='tasks'/>
          </div>
          {/* eslint-disable-next-line */}
          <a href='https://github.com/guss-renteria/mi-neovim' target='_blank' rel='noreferrer noopener' className='card-code dark icon-github-alt'></a>
        </div>
        <div className='card'>
          <div className='card-title'><span className='icon-folder'></span>&nbsp;react-app-tareas</div>
          <div className='card-image'>
            <img src={ tasks_img } alt='tasks'/>
          </div>
          {/* eslint-disable-next-line */}
          <a href='https://github.com/guss-renteria/tareas-react-frontend' target='_blank' rel='noreferrer noopener' className='card-code dark icon-github-alt'></a>
        </div>
        <div className='card'>
          <div className='card-title'><span className='icon-folder'></span>&nbsp;juego-de-la-vida.</div>
          <div className='card-image'>
            <img src={ juego_de_la_vida_img } alt='tasks'/>
          </div>
          {/* eslint-disable-next-line */}
          <a href='https://github.com/guss-renteria/juego-de-la-vida' target='_blank' rel='noreferrer noopener' className='card-code dark icon-github-alt'></a>
        </div>
      </div>
      <div className='proyect-footer'>
        {/* eslint-disable-next-line */}
        visita mi&nbsp;
        <a href='https://github.com/guss-renteria' target='_blank' rel='noreferrer noopener'>
          portafolio 
        </a>
        &nbsp;para saber más sobre mí.
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Proyects;
