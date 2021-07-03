import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderArea } from './styles';

const Header = () => {
    return ( 
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">M</span>
                        <span className="logo-2">K</span>
                        <span className="logo-3">T</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="">Create an account</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Post an ad</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
     );
}
 
export default Header;