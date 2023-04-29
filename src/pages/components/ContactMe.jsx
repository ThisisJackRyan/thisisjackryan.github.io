
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e1y295p', 'template_ykpc1qs', form.current, 'OMNNc2vPllN2qFAjr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };


    return(
        <div className="ContactMe">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex">
                            <div className="name input flex-reverse-column">
                                <input type="text" name="user_name" placeholder="Jack Ryan" required />
                                <span>Name</span>
                            </div>
                            <div className="email input flex-reverse-column"> 
                                <input type="email" name="user_email" placeholder="youremail@gmail.com" required />
                                <span>Email</span>
                            </div>
                        </div>
                        <div className="message input flex-reverse-column ">
                            <textarea type="text" name="message" placeholder="Type your message here..." required />
                            <span>Message</span>
                        </div>
                        <div>
                            <button type="submit" value="Send" className="btn-send">Send</button>
                        </div>
                    </form >
                </div>
    );
}

export default ContactMe;