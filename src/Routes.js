import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

const Routes = () => {
    return (
        <Switch>
            
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

        </Switch>
    );
}

export default Routes;