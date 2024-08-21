import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorComponent: React.FC = () => {
    const title: string = "Not Found - Waleed Portfolio";
    const i: string = 'NotFound';
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <section className='error-section'>
                <code className='code-left'>
                    &lt;{i}&gt;
                </code>
                <div className='error-content'>
                    <h1>404 Not Found!</h1>

                    <p>// Sorry, the page you are looking for does not exist.</p>
                    <p>// Check the url of the site make sure the path as you find on the site exist or not!</p>
                    <Link className='link-style' to="/app">Back to home</Link>

                </div>
                <code className='code-right'>
                    &lt;/{i}&gt;
                </code>
            </section>
        </>
    );
};
export default ErrorComponent;