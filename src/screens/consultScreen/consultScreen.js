import Header from '../../components/header/header';
import Logo from '../../assets/img/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useContext } from 'react';
import MedicineContext from '../../context/medicineContext';
import SocialMediaH from '../../components/socialMedia/socialMedia-h';
import axios from 'axios';
import './consultScreen.css';

function ConsultScreen(props){

  const [nameOrExpedition, setNameOrExpedition] = useState('');
  const [loading, setLoading] = useState(false);
  const [medicine, setMedicine] = useContext(MedicineContext);
  const [notFound, setNotFound] = useState('');

  const iconMenu = <FontAwesomeIcon icon={faBars}/>

  const consultHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      if(/^[0-9]*$/.test(parseInt(nameOrExpedition))){
        const {data} = await axios.post('https://lyeza-backend.herokuapp.com/api/medicine/getDrug', {expedient: nameOrExpedition, name: null});
        setMedicine(data);
        console.log(medicine);
        props.history.push('/result');
      }
      else{
        const {data} = await axios.post('https://lyeza-backend.herokuapp.com/api/medicine/getDrug', {expedient: null, name: nameOrExpedition});
        setMedicine(data);
        props.history.push('/result');
      }
    }
    catch(e){
      console.error(e);
      setNotFound(e.response? e.response.data.msg : "Puede que no sea seguro");
    }
    setLoading(false);
  }

  useEffect(() => {
    if(!localStorage.getItem('userInfo')){
      props.history.push("/login");
    }
  }, [props.history])

  return(
    <>
      <Header icon={iconMenu} urlIcon="menu" />
      <div className="mainInfo consult">
        <div className="consultContainer">
          <div className="titleSec">
            <img src={Logo} alt="Lyeza Logo" />
            <h2>Consultar</h2>
            {notFound && <p style={{color: 'red'}}>{notFound}</p> }
          </div>
          <div className="formContainer">
            <form onSubmit={consultHandler}>
              <div className="nameOrExpedition">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <input id="nameOrExpedition" value={nameOrExpedition} type="text" name="nameOrExpedition" onChange={e => setNameOrExpedition(e.target.value)}/>
              </div>
              <div className="btnConsult">
                <button type="submit" disabled={loading} className="btnConsult">Consultar</button>
              </div>
            </form>  
          </div>
        </div>
        <SocialMediaH />
      </div>
    </>
  )
}

export default ConsultScreen;
