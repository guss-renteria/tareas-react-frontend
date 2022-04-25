import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './layout.scss';

const Layout = ({ children }) => {
  const layout_container = useRef(null);
  const link_container = useRef(null);
  const section_ref = useRef(null);

  const location = useLocation();

  useEffect(() => {
    section_ref.current.scrollTop = 0;

    switch(location.pathname) {
      case '/':
        linksControl('link-tasks');
        break;
      case '/proyects':
        linksControl('link-proyects');
        break;
      default:
        linksControl('404')
        break;
    }
  }, [location]);

  const linksControl = (class_name) => {
    const links = link_container.current.children;

    for(let link of links) {
      if([...link.classList].includes(class_name))
        link.classList.add('active');
      else
        link.classList.remove('active');
    }
  }

  const navHandler = () => {
    layout_container.current?.classList.toggle('active');
  }
  const linkHandler = () => {
    layout_container.current?.classList.remove('active');
  }

  // * return LAYOUT
  return (
    <div className='layout' ref={ layout_container }>
      <div className='layout-nav__responsive' onClick={ navHandler }></div>
      <nav className='layout-nav'>
        <div className='nav-links' ref={ link_container }>
          <Link to='/' className='link link-tasks' onClick={ linkHandler }>
            <span className='icon-book'></span>
            <p>app tareas</p>
          </Link>

          <Link to='/proyects' className='link link-proyects' onClick={ linkHandler }>
            <span className='icon-folder'></span>
            <p>mas proyectos</p>
          </Link>
        </div>
      </nav>
      <section ref={ section_ref }>
        { children }
      </section>
    </div>
  )
}

export default Layout;
