import Cookies from 'js-cookie';

const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

const doLogin = (token, rememberPassword = false) => {
    if (rememberPassword) {
        Cookies.set('token', token, { expires: 999 });
    } else {
        Cookies.set('token', token);
    }
}

const doLogout = () => {
    Cookies.remove('token');
}

export { isLogged, doLogin, doLogout };