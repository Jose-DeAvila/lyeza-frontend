import './registerScreen.css';
import SocialMediaV from '../../components/socialMedia/socialMedia-v';
import Header from '../../components/header/header';
import Logo from '../../assets/img/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faKey, faSignature, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LoadingScreen from '../loadingScreen/loadingScreen';
import { useState } from 'react';
import axios from 'axios';

function RegisterScreen(props){

  const [loading, setLoading] = useState(false);
  const [firstname, setFirsname] = useState('');
  const [lastname, setLastname] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(firstname && lastname && occupation && email && password){
      try{
        const {data} = await axios.post('http://localhost:5000/api/users/register', {firstname, lastname, occupation, email, password});
        if(data.code === 201){
          setError(<span style={{color: 'green'}}>{data.msg + ". Inicie sesión"}</span>);
          setTimeout(() => {
            props.history.push('/login');
          }, 2000);
        }
        else{
          setError(<span style={{color: 'red'}}>{data.msg}</span>);
        }
      }
      catch(e){
        setError(<span style={{color: 'red'}}>{e.response.data.msg}</span>);
      }
    }
    else{
      setError("Por favor, rellene todos los campos");
    }
    setLoading(false);
 }

  return(
    <>
      <LoadingScreen />
      <div className="mainContainer">
        <Header />
        <div className="mainInfo register">
          <div className="loginContainer">
            <div className="titleSec">
              <img src={Logo} alt="Logo Lyeza" />
              <h2>Registro</h2>
              {error && <p className="error">{error}</p>}
            </div>
            <div className="formContainer">
              <form onSubmit={submitHandler}>
                 <div className="email">
                  <FontAwesomeIcon className="icon" icon={faSignature} />
                  <input id="firstname" type="text" name="firstname" placeholder="Nombres" onChange={e => setFirsname(e.target.value)}/>
                </div>
                <div className="email">
                  <FontAwesomeIcon className="icon" icon={faSignature} />
                  <input id="lastname" type="text" name="lastnames" placeholder="Apellidos" onChange={e => setLastname(e.target.value)}/>
                </div>
                 <div className="email">
                  <FontAwesomeIcon className="icon" icon={faBriefcase} />
                  <input id="occupation" type="text" name="occupation" placeholder="Ocupación" onChange={e => setOccupation(e.target.value)} />
                </div>
                 <div className="email">
                  <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} />
                  <input id="email" type="email" name="email" placeholder="Correo electrónico" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                  <div className="inputs">
                    <FontAwesomeIcon icon={faKey} className="icon" />
                    <input id="password" value={password} type="password" name="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className="btnSend">
                  <button type="submit" disabled={loading}>Registrarse</button>
                </div>
              </form>
            </div>
            <div className="notRegistered">
              ¿Ya te encuentras registrado? ¿Qué haces aquí? <br/>
              ¡Ingresa a tu cuenta <Link to="/login" className="link">aquí</Link>!
            </div>
          </div>
        </div>
        <SocialMediaV/>
      </div>
    </>
  )
}

export default RegisterScreen;
