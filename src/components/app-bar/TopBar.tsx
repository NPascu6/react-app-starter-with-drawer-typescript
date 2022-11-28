import {styled, useTheme} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {_defaultDrawerWidth} from '../../_constant';
import {useAppDispatch} from '../../store/store';
import {handleDrawerChange, handleThemeChange} from '../../store/appReducer';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {Grid, Switch} from '@mui/material';
import LoginDialog from "./AccountDialog";
import useWindowSize from "../../hooks/useWindowSize";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const TopBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: _defaultDrawerWidth,
        width: `calc(100% - ${_defaultDrawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const AppBarComponent = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const {
        drawerOpen,
        isDarkTheme
    } = useSelector((state: RootState) => state.app);
    const windowSize = useWindowSize()


    return <TopBar position="fixed" open={drawerOpen}
                   sx={{
                       width: windowSize.innerWidth <= 500 ? '100%' : '100%',
                       backgroundColor: theme.backgroundColor, color: theme.textColor, '& .MuiDrawer-paper': {
                           backgroundColor: theme.textColor,
                           color: theme.backgroundColor,
                       }
                   }}>
        <Toolbar>
            <Grid container>
                <Grid item xs={10}>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={() => dispatch(handleDrawerChange(!drawerOpen))}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(drawerOpen && {display: 'inherit'}),
                        }}
                    >
                        {!drawerOpen ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </Grid>
                <Grid item xs={2} sx={{display: 'flex'}} className={'Center'}>
                    <IconButton>
                        <LoginDialog/>
                    </IconButton>
                    <Switch onClick={() => dispatch(handleThemeChange(!isDarkTheme))}/>
                </Grid>
            </Grid>
        </Toolbar>
    </TopBar>;
};

export default AppBarComponent;
