import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaEnvelope} from 'react-icons/fa';

import "./Contact.css";

function Contact(){

  const form = useRef();
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Clear any previous errors
    setEmailError('');

  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      <div className='contact-page'>

        <div className='mailer main-container'>
            
          <div className='side-by-side'>

            <section className='info-sec'> 

              <h1>contact me</h1>
              <p>If you'd like to reach out please feel free to get in touch and I will respond as soon as possible!</p>
              <p>If you prefer to contact me directly, send your Email to: lpcolias@gmail.com</p>
                
            </section>

            <div className='divider'></div>

            <section className='form-sec'> 

              <form ref={form} onSubmit={sendEmail}>
                        
                <div className="form-field">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                  />
                </div>

                <button type="submit">Submit</button>

              </form>

            </section>

          </div>
            
          <section className="link-sec">
            <ul className='link-container'>
              <li className={` `}><a className='ft-link' href='https://www.linkedin.com/in/lucas-colias'><FaLinkedin /> </a></li>
              <li className={` `}><a className='ft-link' href='https://www.instagram.com/_duke_luke_/'><FaInstagram /></a></li>
              <li className={` `}><a className='ft-link' href='https://twitter.com/_duke_luke_'><FaTwitter />  </a></li>
              <li className={` `}><a className='ft-link' href='https://www.facebook.com/luke.colias/'><FaFacebook /> </a></li>
              <li className={` `}><a className='ft-link' href='mailto:lpcolias@gmail.com'><FaEnvelope /> </a></li>
            </ul>
          </section>
        </div>  
      </div>
    </>
  );
}

export default Contact;