
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import ContactMe  from './components/ContactMe';
import { useState } from "react";






const Contact = () => {

    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((current) => !current);
    }

    return(
    <div>
        <div className="">
            <div className="PaddingShovePastHeader">
                <div className="ContactTitle"><span>Contact</span></div>
                <div className="flex ContactLinkSection">
                    <div className="x1 ContactIcon flex center ">
                        <a href="https://www.instagram.com/thisisjackryan/" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className="x1 ContactIcon flex center ">
                        <a href="https://github.com/ThisisJackRyan" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className="x1 ContactIcon flex center " >
                        <div onClick={handleToggle}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    </div>
                    <div className="x1 ContactIcon flex center ">
                        <a href="https://monkeytype.com/" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </div>
                </div>
                {visible && <ContactMe />}
            </div>
        </div>
       
    </div>
    );
}

export default Contact;