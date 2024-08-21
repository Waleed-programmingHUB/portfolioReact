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