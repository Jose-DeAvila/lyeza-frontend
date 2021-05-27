import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './socialMedia-h.css';

function SocialMediaH(){
  return(
    <>
      <footer>
        <FontAwesomeIcon className="socialOption" icon={faInstagram} />
        <FontAwesomeIcon className="socialOption" icon={faFacebookF} />
        <FontAwesomeIcon className="socialOption" icon={faTwitter} />
      </footer>
    </>
  )
}

export default SocialMediaH;

