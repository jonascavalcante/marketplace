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
                                    <Link to="./my-account">Minha conta</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                                <li>
                                    <Link to="./post-an-ad" className="button">Publicar um anúncio</Link>
                                </li>
                            </>                        
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="./signin">Entrar</Link>
                                </li>
                                <li>
                                    <Link to="./signup">Cadastrar-se</Link>
                                </li>
                                <li>
                                    <Link to="./signin" className="button">Publicar um anúncio</Link>
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