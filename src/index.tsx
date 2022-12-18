import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import './index.css';
import './App.css'
import App from './App';
import {Provider} from 'react-redux';
import store from './store/store';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const persists = persistStore(store);

const root = ReactDOM.createRoot(
    // @ts-ignore
    document.getElementById('root')
);
root.render(
    <Provider store={store}>
        <HashRouter>
            <PersistGate persistor={persists}>
                <App/>

            </PersistGate>
        </HashRouter>
    </Provider>
);
