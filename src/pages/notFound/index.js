import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1>Ops!</h1>
            <Link to="/">Ir para página inicial</Link>
        </>
    );
}

export default NotFound;