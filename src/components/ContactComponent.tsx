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
                    <form action="/submit" method="post">
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.." required />  
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