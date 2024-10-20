import React, { useState, useEffect } from 'react';
//import emailjs 
import emailjs from '@emailjs/browser';
//import style
import './FormStyle.css';
import './FormNestHubStyle.css';

export const Form = () => {
  //initialize form state
  const [formData, setFormData] = useState({
    user_name :'',
    user_email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  //initialize state for email last email sent to enable rate limit
  const [lastEmailSent, setLastEmailSent] = useState(null);
  //initialize error state to warn user of email rate limit
  const [error, setError] = useState('');

  //import emailjs public key
  const public_key_emailjs = import.meta.env.VITE_PUBLIC_KEY;
  //import emailjs service id
  const service_id_emailjs = import.meta.env.VITE_SERVICE_ID;
  //import emailjs template id
  const template_id_emailjs = import.meta.env.VITE_TEMPLATE_ID; 

  // initialize emailjs with the public key
  useEffect(() => {   
    emailjs.init(public_key_emailjs);
  }, []);
  

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    //get current time
    const now = new Date();

    //check whether last email was sent less than a minute ago
    if (lastEmailSent && (now - lastEmailSent) < 60000) {
      setError('Too many attempts. Please wait a minute before sending another email.');
      //remove from DOM
      removeError();
      return;
    }

    //send email using email js service
    emailjs.sendForm(service_id_emailjs, template_id_emailjs, event.target)
    //if successful
            .then(() => {
                //set success message
                setAlertBox();
                //set time last email was sent
                setLastEmailSent(new Date());
                //update error state to null
                setError('');
            }, (error) => { //if not successful
              setError('Failed to send the email.', error);
                //remove from DOM
                removeError();
            });

    //clear form
    event.target.reset();
    
  };

  //dynamically handle state of form data
  const handleChange = (event) => {
    //update from state
    setFormData((prev) => ({
      ...prev,
      //update targeted value
      [event.target.name]: event.target.value
    }));
  };

  //remove message from DOM
  const setAlertBox = () => {
    // display duccess message
    setSuccess(true);
    //remove message from DOM
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  }

//remove error message from DOM
  const removeError = () => {
  //remove error message from DOM
    setTimeout(() => {
      setError('');
    }, 3000);
  }



  // main function-----------------------------------
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <title>Contact Form</title>

        <input type="hidden" name="contact_number"  value="697483" />
        <label>Name</label>
        <input type="text" name="user_name" onChange={handleChange} required/>
        <label>Email</label>
        <input type="email" name="user_email" onChange={handleChange} required/>
        <label>Message</label>
        <textarea name="message" onChange={handleChange} required></textarea>
        <input type="submit" value="Send" />

        {/* display error of success message */}
        <div className="alert-box">
          {success && <p className='fade-out'>Sent!</p>}
          {error && <p className='red fade-out'>{error}</p>}
        </div>
    </form>
  )
}

