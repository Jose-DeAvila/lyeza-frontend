import './loginScreen.css';
import SocialMediaV from '../../components/socialMedia/socialMedia-v';
import Header from '../../components/header/header';
import Logo from '../../assets/img/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LoadingScreen from '../loadingScreen/loadingScreen';
import { useEffect, useState } from 'react';
import axios from 'axios';

function LoginScreen(props){

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('userInfo')){
      props.history.push("/init");
    }
  }, [props.history])

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(email && password){
      try{
        const {data} = await axios.post('https://lyeza-backend.herokuapp.com/api/users/login', {email, password});
        if(data.code === 202){
          localStorage.setItem('userInfo', JSON.stringify(data.data));
          setError(<span style={{color: 'green'}}>Logeado correctamente. Redireccionando... </span>);
          setTimeout(() => {
            props.history.push("/init");
          }, 4000)
        }
      }
      catch(e){
        setError(<span style={{color: 'red'}}>{e.response.data.msg}</span>);
      }  
    }
    else{
      setError(<span style={{color: 'red'}}>Por favor, rellene todos los campos</span>);
    }
    setLoading(false);
  }

  return(
    <>
      <LoadingScreen />
      <div className="mainContainer">
        <Header />
        <div className="mainInfo login">
          <div className="loginContainer">
            <div className="titleSec">
              <img src={Logo} alt="Logo Lyeza" />
              <h2 style={{width: '100%'}}>Inicio de sesión</h2>
              {error && <p className="error">{error}</p>}
            </div>
            <div className="formContainer">
              <form onSubmit={submitHandler}>
                <div className="email">
                  <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} />
                  <input id="email" type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Correo electrónico"/>
                </div>
                <div className="password">
                  <div className="inputs">
                    <FontAwesomeIcon icon={faKey} className="icon" />
                    <input id="password" type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Contraseña"/>
                  </div>
                  <p className="passwordForgot"><Link to="#">¿Olvidaste la contraseña?</Link></p>
                </div>
                <div className="btnSend">
                  <button type="submit" disabled={loading}>Entrar</button>
                </div>
              </form>
            </div>
            <div className="notRegistered">
              ¿Aún no te has registrado? ¿Qué esperas? <br/>
              ¡Registrate <Link to="/register" className="link">aquí</Link>!
            </div>
          </div>
        </div>
        <SocialMediaV/>
      </div>
    </>
  )
}

export default LoginScreen;

