import CssBaseline from '@mui/material/CssBaseline';
import AppBarComponent from '../components/app-bar/TopBar';
import SideBar from '../components/app-bar/SideBar';
import {RoutesSwitch} from '../router/Routes';
import React from 'react';
import {useTheme} from '@mui/material/styles';
import background from "../assets/images/background.jpg";
import {handleDrawerChange} from "../store/appReducer";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";

const MainPage = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const {
        drawerOpen,
    } = useSelector((state: RootState) => state.app);

    return <div className={'App'}
                style={{
                    overflow: 'auto',
                    height: `calc('100%' - '4em')`,
                    backgroundImage: `url(${background})`,
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                }}>
        <CssBaseline/>
        <div onBlur={() => drawerOpen ? dispatch(handleDrawerChange(!drawerOpen)) : null}>
            <AppBarComponent/>
            <SideBar/>
        </div>

        <RoutesSwitch/>
    </div>;

};

export default MainPage;
