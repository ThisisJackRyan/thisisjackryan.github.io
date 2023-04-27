import backgroundImage from './images/Cube.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e1y295p', 'template_ykpc1qs', form.current, 'OMNNc2vPllN2qFAjr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

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
                        <a href="https://www.instagram.com/thisisjackryan/" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className="x1 ContactIcon flex center ">
                        <a href="https://github.com/ThisisJackRyan" target="_blank" rel="noreferrer" >
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
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </div>
                </div>
                <div className="ContactMe">
                    <div>
                        <div className="flex">
                            <div className="name input">
                                <input type="text" placeholder="Jack Ryan" required />
                            </div>
                            <div className="email input">
                                <input type="email" placeholder="youremail@gmail.com" required />
                            </div>
                        </div>
                        <div className="message input ">
                            <textarea type="text" placeholder="Type your message here..." required />
                        </div>
                        <div>
                            <button className="btn-send">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    );
}

export default Contact;