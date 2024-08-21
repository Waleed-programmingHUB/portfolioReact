import React from 'react';
import { Link } from 'react-router-dom';

const Footer : React.FC = () => {
    return (
        <footer>
            <p>© 2021 Waleed Ali Sarwar. All rights reserved. | Email: <Link className='link-style' to='mailto:hello@waleedalisarwar.live'>hello@waleedalisarwar.live</Link></p>
        </footer>
    );
};
export default Footer;