import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './assets/likeHand.svg';
import SocialMediaH from '../../components/socialMedia/socialMedia-h';
import './initScreen.css';

function InitScreen(){

  let iconMenu = <FontAwesomeIcon icon={faBars} />

  return(
    <>
      <div className="imgBackground" style={{backgroundImage: `url(${backgroundImage}`}}></div>
      <Header icon={iconMenu} urlIcon="menu"/>
      <div className="initContainer">
        <div className="text">
          <h1 className="title">Seguridad <span>medicinal</span></h1>
          <h3>
            Farmacología Vigente
          </h3>
          
          <Link to="/consult" className="btnShow">Consulte</Link>
        </div>
      </div>
      <SocialMediaH/>
    </>
  )
}

export default InitScreen;
