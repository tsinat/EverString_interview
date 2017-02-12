import React from 'react';
import { Route } from 'react-router';

import App from './App';
import HomePage from './components/HomePage';


export default (
    <Route  component={App}>
        <Route  path='/' component={HomePage}/>
    </Route>
);
