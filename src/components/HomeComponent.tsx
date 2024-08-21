import React from 'react';
import { Helmet } from 'react-helmet';
import TypingEffect from './_layouts/TypeEffect';
import './_layouts/layout.css';

const HomeComponent: React.FC = () => {
    const i: string = 'Intro';
    return (
        <>
            <Helmet>
                <title>Waleed Portfolio</title>
                <meta name="description" content="Portfolio Website for Showcasing our Skill in Dotnet Fullstack developer" />
                <meta name="keywords" content="Waleed Ali Sarwar, Software Developer, AI, ASP.NET, Full-stack Development, Portfolio, BSBI, Virtual University of Pakistan" />
                <meta name="author" content="Waleed Ali Sarwar" />
            </Helmet>
            <section className='intro-section'>
                <code className='code-left'>
                    &lt;{i}&gt;
                </code>
                <div className='intro-content'>
                    <div className='intro-info'>
                        {<TypingEffect />}
                    </div>
                </div>
                <code className='code-right'>
                    &lt;/{i}&gt;
                </code>
            </section>

        </>
    );
};
export default HomeComponent;