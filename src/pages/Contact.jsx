import backgroundImage from './images/Cube.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




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
                <div className="flex ContactLinkSection">
                    <div className="x1 ContactIcon flex center ">
                        <a href="#" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className="x1 ContactIcon flex center ">
                        <a href="#" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className="x1 ContactIcon flex center ">
                        <a href="#" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                    <div className="x1 ContactIcon flex center ">
                        <a href="#" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    );
}

export default Contact;