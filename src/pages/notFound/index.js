import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1>Ops!</h1>
            <Link to="/">Go to the homepage</Link>
        </>
    );
}

export default NotFound;