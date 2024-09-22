import React from 'react';
import { Helmet } from 'react-helmet';
import './_layouts/layout.css';
import AboutMe from './_layouts/AboutMe';
import Intro from './_layouts/Intro';
import Education from './_layouts/Education';

const HomeComponent: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Waleed Portfolio</title>
                <meta name="description" content="Portfolio Website for Showcasing our Skill in Dotnet Fullstack developer" />
                <meta name="keywords" content="Waleed Ali Sarwar, Software Developer, AI, ASP.NET, Full-stack Development, Portfolio, BSBI, Virtual University of Pakistan" />
                <meta name="author" content="Waleed Ali Sarwar" />
            </Helmet>

            <Intro />
            <AboutMe />
            <Education/>
        </>
    );
};
export default HomeComponent;