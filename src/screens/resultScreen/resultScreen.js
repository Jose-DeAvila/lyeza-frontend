import {useEffect, useContext} from "react";
import MedicineContext from '../../context/medicineContext';
import Header from '../../components/header/header';
import SocialMediaH from '../../components/socialMedia/socialMedia-h';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import './resultScreen.css';

function ResultScreen(props){

  const [medicine] = useContext(MedicineContext);
  const iconMenu = <FontAwesomeIcon icon={faBars} />

  useEffect(() => {
    if(!localStorage.getItem('userInfo')){
      props.history.push('/login');
    }

    if(!medicine || medicine === {}){
      props.history.push('/consult');
    }
  })

  return(
    <>
      <Header icon={iconMenu} urlIcon="menu" />
      <div className="mainInfo result">
        <div className="btnBack">
          <Link to="/consult"><FontAwesomeIcon icon={faArrowCircleLeft}/></Link>
        </div>
        <h2>{medicine.producto}</h2>
        <div className="medicineInfo">
          <div className="details">
            <div className="expedient">
              <span>Expediente:</span> {medicine.expediente}
            </div>
            <div className="description">
              <span>Descripcion:</span> {medicine.descripcioncomercial}
            </div>
            <div className="expedition">
              <span>Fecha de expedicion:</span> {medicine.fechaexpedicion}
            </div>
            <div className="vencimient">
              <span>Fecha de vencimiento:</span> {medicine.fechavencimiento}
            </div>
            <div className="state">
              <span>Estado de registro:</span> {medicine.estadoregistro}
            </div>
          </div>
        </div>
      </div>
      <SocialMediaH />
    </>
  )
}

export default ResultScreen;
