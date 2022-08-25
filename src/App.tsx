import React from 'react';
import './App.css';
import {RoutesSwitch} from './router/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerComponent from './components/top-bar/DrawerComponent';
import AppBarComponent from './components/top-bar/AppBar';

function App() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className="App">
            <CssBaseline/>
            <AppBarComponent open={open} handleDrawerOpen={handleDrawerOpen}/>
            <DrawerComponent open={open} handleDrawerClose={handleDrawerClose}/>
            <RoutesSwitch/>
        </div>
    );
}

export default App;
