import React from 'react';
import Logo from '../../assets/Logo_SitePortfolio.png';
const Header: React.FC = () => {
    return (
        <header>
            <img src={Logo} alt="Logo" className="img-style" />
        </header>
    );
};
export default Header;