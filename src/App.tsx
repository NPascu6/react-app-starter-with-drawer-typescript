import React from 'react';
import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import {useSelector} from 'react-redux';
import {RootState} from './store/rootReducer';
import {darkTheme, lightTheme} from './theme/theme';
import MainPage from './pages/MainPage';

function App() {
    const {isDarkTheme} = useSelector((state: RootState) => state.app);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <MainPage/>
        </ThemeProvider>
    );
}

export default App;
