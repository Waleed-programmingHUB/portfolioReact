import React from 'react';
import { Helmet } from 'react-helmet';

const HomeComponent: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Waleed Portfolio</title>
            </Helmet>
            <h2>Main Content</h2>
        </>
    );
};
export default HomeComponent;