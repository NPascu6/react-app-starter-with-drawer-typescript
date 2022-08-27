import CssBaseline from '@mui/material/CssBaseline';
import AppBarComponent from '../components/app-bar/TopBar';
import SideBar from '../components/app-bar/SideBar';
import {RoutesSwitch} from '../router/Routes';
import React from 'react';
import {useTheme} from '@mui/material/styles';
import background from "../assets/images/background.jpg";

const MainPage = () => {
    const theme = useTheme();

    return <div className={'App'}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                }}>
        <CssBaseline/>
        <AppBarComponent/>
        <SideBar/>
        <RoutesSwitch/>
    </div>;

};

export default MainPage;
