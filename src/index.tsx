import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import './index.css';
import './App.css'
import App from './App';
import {Provider} from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
    // @ts-ignore
    document.getElementById('root')
);
root.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);
