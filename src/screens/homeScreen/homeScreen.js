import background from '../../assets/img/background.png';
import './homeScreen.css';
import Header from '../../components/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import SocialMediaH from '../../components/socialMedia/socialMedia-h';
import LoadingScreen from '../loadingScreen/loadingScreen';
import { Link } from 'react-router-dom';
function HomeScreen(){

  let iconLogin = <FontAwesomeIcon icon={faSignInAlt} />
  
  return(
    <>
      <LoadingScreen />
      <div className="mainContainer">
        <Header icon={iconLogin} urlIcon="login"/>
        <div className="mainInfo">
          <div className="bg" style={{backgroundImage: `url(${background})`}}></div>
          <div className="textInfo">
            <p className="mainText">
              Verificación y control de calidad de medicamentos.
            </p>
          </div> 
          <Link to="/register" className="btnInit">Descubre</Link>    
        </div>
        <SocialMediaH/>
      </div>
    </>
    
  )
}

export default HomeScreen;
