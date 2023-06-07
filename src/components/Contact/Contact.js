import React, {useState} from "react";
import axios from "axios";

import "./Contact.css";

function Contact(){
    
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Clear any previous errors
    setEmailError('');

    // Send form data to your email address using Axios or any other HTTP client library
    axios.post('/api/contact', { name, email, message })
      .then((response) => {
        console.log(response);
        // Optionally, show a success message or redirect to a success page
      })
      .catch((error) => {
        console.error(error);
        // Optionally, show an error message or redirect to an error page
      });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
        <div className='contact-page'>

            <div className='mailer'>
            
                <div className='side-by-side'>

                <section className='info-sec'> 
                    <h1>contact me</h1>
                    <p>If you'd like to make an enquiry, please feel free to get in touch, and I will respond as soon as possible!</p>
                    <p>If you prefer to contact me directly, send your Email to: lpcolias@gmail.com</p>
                </section>
                
                <section className='form-sec'> 

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                            {emailError && <p>{emailError}</p>}
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            />
                        </div>

                        <button type="submit">Submit</button>

                    </form>

                </section>

                </div>
            
        
                <section className="link-sec">
                    <h2>...links...</h2>
                </section>

            </div>

        </div>
    </>
  );
}

export default Contact;