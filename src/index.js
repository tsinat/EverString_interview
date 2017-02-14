import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import routes from './routes'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('root')
);
