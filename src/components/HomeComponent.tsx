import React from 'react';
import { Helmet } from 'react-helmet';
import './_layouts/layout.css';

const HomeComponent: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Waleed Portfolio</title>
            </Helmet>
            <section className='intro-section'>
                <div className='intro-content'>
                    <img src="" alt="Waleed Image" />
                    <h1>Hi,</h1>
                    <h1>I'm Waleed Ali Sarwar</h1>
                    <h2>Full stack developer</h2>
                </div>
            </section>
            <section className='experience-section'>
                <div className='experience-content'>
                    <h2>About Me</h2>
                    <p>I am a full stack developer with a passion for creating web applications. I have experience with front-end and back-end technologies. I am proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am always eager to learn new technologies and expand my skill set. I am a team player and enjoy collaborating with others to create amazing applications. </p>
                </div>
            </section>
        </>
    );
};
export default HomeComponent;