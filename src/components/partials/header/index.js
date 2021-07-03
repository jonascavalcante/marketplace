import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderArea } from './styles';

import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {

    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

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
                        {logged && 
                            <>
                                <li>
                                    <Link to="./my-account">My Account</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                                <li>
                                    <Link to="./post-an-ad" className="button">Post an ad</Link>
                                </li>
                            </>                        
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="./signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="./signup">Create an account</Link>
                                </li>
                                <li>
                                    <Link to="./signin" className="button">Post an ad</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
     );
}
 
export default Header;