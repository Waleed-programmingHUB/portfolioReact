import React from 'react';
import { Helmet } from 'react-helmet';
const ContactComponent: React.FC = () => {
    const title = "Contact - Waleed Portfolio";
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <section className='contact-section'>

            </section>
        </>
    );
};
export default ContactComponent;