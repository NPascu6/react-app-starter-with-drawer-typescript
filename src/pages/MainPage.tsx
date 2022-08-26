import CssBaseline from '@mui/material/CssBaseline';
import AppBarComponent from '../components/app-bar/TopBar';
import SideBar from '../components/app-bar/SideBar';
import {RoutesSwitch} from '../router/Routes';
import React from 'react';
import {Paper} from '@mui/material';
import {useTheme} from '@mui/material/styles';

const MainPage = () => {
    const theme = useTheme();

    return <Paper className={'App'}
                  sx={{
                      backgroundColor: theme.backgroundColor,
                      color: theme.textColor,
                      '& .MuiDrawer-paper': {
                          backgroundColor: theme.textColor,
                          color: theme.backgroundColor,
                      }
                  }}>
        <CssBaseline/>
        <AppBarComponent/>
        <SideBar/>
        <RoutesSwitch/>
    </Paper>;

};

export default MainPage;