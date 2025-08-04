import React, { useRef } from 'react';

import './contact.css'; 
import linkedinIcon from '../../assets/linkedinIcon.png';
import githubIcon from '../../assets/githubIcon.png';
import twitterIcon from '../../assets/twitterIcon.png';
import instaIcon from '../../assets/instaIcon.jpg';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form=useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b8jjac9', 'template_ywosw1f', form.current, {
        publicKey: 'dRl6SBlWA6pXUnRJtBztM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },);
  };
    return(
        <section className='contactPage'>
            <div id='contact'> 
                <h1 className='contactPageTitle'> Contact Me</h1>
                <span className='contactDesc'>I'm always excited to connect, collaborate, or explore new opportunities. Whether you have a question, a project idea, or just want to say hello — feel free to reach out! Let’s build something great together. </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}> 
                      <input type='text' className='name' placeholder='Your Name' name='from_name' required />
                      <input type='email' className='email' placeholder='Your Email' name='from_email' required />
                      <textarea className='msg' name='message' rows="5" placeholder='Your Message' required></textarea>
        
                      <button type='submit' className='submitBtn'>Submit</button>

                      <div className='links'>
                          <img src={linkedinIcon} alt='linkedin' className='link'/>
                          <img src={githubIcon} alt='github' className='link'/>
                          <img src={twitterIcon} alt='twitter' className='link'/>
                          <img src={instaIcon} alt='instagram' className='link'/>
                      </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;