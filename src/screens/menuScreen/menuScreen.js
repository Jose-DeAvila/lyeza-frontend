import Logo from '../../assets/img/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSearch, faQuestionCircle, faUsers, faDoorOpen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './menuScreen.css';

function MenuScreen(props){

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    props.history.push('/login');
  }

  return(
    <>
      <button className="btnClose" onClick={e => window.history.back()}><FontAwesomeIcon icon={faTimes} /></button>
      <div className="logotype menu">
        <img src={Logo} alt="Logo Lyeza" className="logo-img" />
      </div>
      <div className="items one">
        <FontAwesomeIcon icon={faHome} />
        <Link to="/">Inicio</Link>
      </div>
      <div className="items two">
        <FontAwesomeIcon icon={faCog} />  
        <Link to="/config" disabled>Configuración</Link>
      </div>
      <div className="items three">
        <FontAwesomeIcon icon={faSearch} />
        <Link to="/consult">Consultar</Link>
      </div>
      <div className="items four">
        <FontAwesomeIcon icon={faQuestionCircle} />
        <Link to="/faq">Ayuda</Link>
      </div>
      <div className="items five">
        <FontAwesomeIcon icon={faUsers} />
        <Link to="/forum">Foro</Link>
      </div>
      <div onClick={logoutHandler} className="items six">
        <FontAwesomeIcon icon={faDoorOpen} />
        <Link to="/signout">Cerrar Sesión</Link>
      </div>
    </>
  )
}

export default MenuScreen;
