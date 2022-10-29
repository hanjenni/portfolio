import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zi09qql', 'template_oueit1y', form.current, 'FRxRwbrB8Imx6Pf3w')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      
            
      };
    return (
        <>
            <section className='contactSection'>
                <div className='container'>
                    <h1 id='contact' >Contact</h1>
                    <center>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form'>
                            <input type="text" placeholder='name' name='user_name' required />
                        </div>
                        <div className='form'>
                            <input type="email" placeholder='email' name='user_email' required />
                        </div>
                        <div className='form'>
                            <input type="text" placeholder='subject' name='subject' required />
                        </div>
                        <div className='form'>
                            <textarea name='message'></textarea>
                        </div>
                        <div className='form'>
                            <button type='submit'>Send Message</button>
                        </div>
                    </form>
                    </center>
                </div>
            </section>


        </>
    )
}

export default Contact