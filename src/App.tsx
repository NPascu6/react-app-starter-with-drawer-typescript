import React from 'react';
import './App.css';
import {RoutesSwitch} from './router/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './components/top-bar/SideBar';
import AppBarComponent from './components/top-bar/AppBar';

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <AppBarComponent/>
            <SideBar/>
            <RoutesSwitch/>
        </div>
    );
}

export default App;
