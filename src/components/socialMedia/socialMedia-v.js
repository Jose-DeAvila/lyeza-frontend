import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './socialMedia-v.css';

function SocialMediaV(){
  return(
    <>
      <footer className="vertical">
        <FontAwesomeIcon className="socialOption" icon={faInstagram} />
        <FontAwesomeIcon className="socialOption" icon={faFacebookF} />
        <FontAwesomeIcon className="socialOption" icon={faTwitter} />
      </footer>
    </>
  )
}

export default SocialMediaV;
