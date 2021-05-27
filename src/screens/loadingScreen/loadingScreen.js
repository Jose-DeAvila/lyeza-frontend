import logo from '../../assets/img/Logo.svg';
import './loadingScreen.css';

function LoadingScreen(){
  return(
    <div className="loader">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo Lyeza" />
        </div>
        <div className="text">
          <p>Lyeza</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen;
