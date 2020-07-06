import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers/Reducers';
import thunk from 'redux-thunk';

import App from './Components/App';



ReactDOM.render(
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <App />
    </Provider>,
     document.querySelector('#root')
);