import './footer.scss';

const Footer = () => {
  // * return FOOTER
  return (
    <div className='footer'>
      <div className='footer-social'>
        {/* eslint-disable-next-line */}
        <a className='icon-linkedin' href='https://www.linkedin.com/in/gustavo-renter%C3%ADa-317577238/' target='_blank' rel='noreferrer noopener'></a>
        {/* eslint-disable-next-line */}
        <a className='icon-github-alt' href='https://github.com/guss-renteria' target='_blank' rel='noreferrer noopener'></a>
      </div>

      <div className='footer-more-links'>
        {/* eslint-disable-next-line */}
        <a href='https://github.com/guss-renteria/tareas-react-frontend' target='_blank' rel='noreferrer noopener'>
          <span className='icon-flask'></span>&nbsp;&nbsp;
          link del proyecto
        </a>
        {/* eslint-disable-next-line */}
        <a href='https://github.com/guss-renteria' target='_blank' rel='noreferrer noopener'>
          <span className='icon-certificate'></span>&nbsp;&nbsp;
          portafolio de proyectos
        </a>
      </div>
    </div>
  )
}

export default Footer;
