import backgroundImage from './images/Cube.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
    return(
    <div>
      <style>
            {` 
                body {
                    background-image: url(${backgroundImage});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            `}
        </style>
        <div className="example">
            <div className="PaddingShovePastHeader">
                <div className="ContactTitle"><span>Contact</span></div>
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
       
    </div>
    );
}

export default Contact;