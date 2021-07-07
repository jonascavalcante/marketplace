import React, { useState } from 'react';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import { PageArea } from './styles';

import useAPI from '../../helpers/marketAPI';
import { doLogin } from '../../helpers/AuthHandler';

const Signin = () => {

    const api = useAPI();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        /* const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        } */

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Sign Up</PageTitle>
            <PageArea>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>

                    <label className="area">
                        <div className="area--title">Full name</div>
                        <div className="area--input">
                            <input
                                disabled={disabled}
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">State</div>
                        <div className="area--input">
                            <select 
                                value={stateLoc}
                                onChange={e => setStateLoc(e.target.value)}
                                required
                            >
                                <option></option>
                            </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input
                                disabled={disabled}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Password</div>
                        <div className="area--input">
                            <input
                                disabled={disabled}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Confirm password</div>
                        <div className="area--input">
                            <input
                                disabled={disabled}
                                type="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>                    

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Register</button>
                        </div>
                    </label>

                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Signin;