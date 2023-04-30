
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group';


import ContactMe  from './components/ContactMe';
import DiscordDropdown from './components/DiscordDropdown';
import { useState } from "react";





const dropDown = () => {
    return (
        <DiscordDropdown />
    );
}

const Contact = () => {

    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((current) => !current);
    }

    return(
    <div>
        <div >
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
                        <div>
                        <FontAwesomeIcon icon={faDiscord}/>
                        </div>
                        
                           
                            
                                

                        
                    </div>
                </div>{
                <CSSTransition
                     in={!visible}
                     timeout={500}
                     appear={true}
                     classNames="transition"


                >
                    <ContactMe /> 
                </CSSTransition>
}               
            </div>
        </div>
       
    </div>
    );
}

export default Contact;