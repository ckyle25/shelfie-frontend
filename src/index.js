import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Bin from './components/Bin.js'
import {BrowserRouter} from 'react-router-dom';
import router from './router.js'

ReactDOM.render(
    <BrowserRouter>
    {router}
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
