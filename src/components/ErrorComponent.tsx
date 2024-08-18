import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorComponent: React.FC = () => {
    const title = "Not Found - Waleed Portfolio";
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <h1>Not Found!</h1>
            <p>Check the url of the site make sure the path as you find on the site exist or not!</p>
            <Link to="/">Back to home</Link>
        </>
    );
};
export default ErrorComponent;