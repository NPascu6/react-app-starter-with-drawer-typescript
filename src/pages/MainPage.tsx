import CssBaseline from '@mui/material/CssBaseline';
import AppBarComponent from '../components/app-bar/TopBar';
import SideBar from '../components/app-bar/SideBar';
import {RoutesSwitch} from '../router/Routes';
import React from 'react';
import {useTheme} from '@mui/material/styles';
import background from "../assets/images/background.jpg";
import AppFooter from "../components/app-bar/AppFooter";
import {Grid} from "@mui/material";

const MainPage = () => {
    const theme = useTheme();

    return <>
        <Grid sx={{  "&::-webkit-scrollbar": {
                width: 20,
            },}} className={'App'}
             style={{
                 overflow: 'auto',
                 height: `calc('100% - '5.5em')`,
                 backgroundImage: `url(${background})`,
                 backgroundColor: theme.backgroundColor,
                 color: theme.textColor,
             }}>
            <CssBaseline/>
            <div>
                <AppBarComponent/>
                <SideBar/>
            </div>
            <RoutesSwitch/>
        </Grid>
        <AppFooter/>
    </>
};

export default MainPage;
