import React from 'react';
import { Helmet } from 'react-helmet';

const ContactComponent: React.FC = () => {
    const title = "Contact - Waleed Portfolio";
    const i = 'Contact';
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <section className='contact-section'>
                <code className='code-left'>
                    &lt;{i}&gt;
                </code>
                <div className='contact-content'>
                    <form action="/contact" className='form-contact' >
                        <div className='contact-img'></div>
                        <h1>Get in touch</h1>
                        <h2> I'm here to help. </h2>
                        <p>* Reach out today, and let's start something amazing together!</p>
                    
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className='input-control' placeholder="Your name.." required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className='input-control' placeholder="Your email.." required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className='text-area' placeholder="Write something.." required></textarea>
                        </div>
                        <div className='form-group'>
                            <button value="Submit" id='ContactSubmit'>Submit</button>
                        </div>
                    </form>
                </div>


                <code className='code-right'>
                    &lt;{i}&gt;
                </code>
            </section>
        </>
    );
};
export default ContactComponent;