import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/config';

import App from './App/App';
import "bootstrap/scss/bootstrap.scss";
import './stylesheets/main.scss';



ReactDOM.render(
    <Provider store ={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));