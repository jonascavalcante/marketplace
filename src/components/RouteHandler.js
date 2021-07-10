import React from 'react';
import { Route } from 'react-router-dom';

const RouteHandler = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => children}
        />
    );
}

export default RouteHandler;