import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import {Grid, ListItem, ListItemIcon, ListItemText, Tooltip} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import React, {useEffect, useState} from 'react';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {useLocation, useNavigate} from 'react-router-dom';
import {_defaultDrawerWidth} from '../../_constant';
import {useAppDispatch} from '../../store/store';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {handleDrawerChange} from '../../store/appReducer';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ApiIcon from '@mui/icons-material/Api';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebase";
import TextsmsIcon from '@mui/icons-material/Textsms';

const openedMixin = (theme: Theme): CSSObject => ({
    width: _defaultDrawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: _defaultDrawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const SideBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [user] = useAuthState(auth);
    const {
        drawerOpen,
    } = useSelector((state: RootState) => state.app);
    const location = useLocation();
    const [routes, setRoutes] = useState<any>([
        {key: 'Home', url: '/'},
        {key: 'About', url: '/about'},
        {key: 'Videos', url: '/videos'},
        {key: 'Chat', url: '/chat'},
        {key: 'TestAPI', url: '/testAPI'}])

    useEffect(() => {
        if (user) {
            setRoutes([
                {key: 'Home', url: '/'},
                {key: 'About', url: '/about'},
                {key: 'Videos', url: '/videos'},
                {key: 'Chat', url: '/chat'},
                {key: 'TestAPI', url: '/testAPI'}])
        } else {
            setRoutes([
                {key: 'Home', url: '/'},
                {key: 'About', url: '/about'},
                {key: 'Videos', url: '/videos'}])
        }
    }, [user])

    const renderIcon = (routeKey: string, route: string) => {
        switch (routeKey) {
            case 'Home' : {
                return <Tooltip title={"Home"}>
                    <InboxIcon sx={{
                        color: location.pathname === route ? theme.textColor : theme.backgroundColor,
                        '&:hover': {color: location.pathname === route ? theme.textColor : theme.backgroundColor,}
                    }}
                    />
                </Tooltip>;
            }
            case 'About' : {
                return <Tooltip title={"Short bio"}>
                    <MailIcon sx={{
                        color: location.pathname === route ? theme.textColor : theme.backgroundColor,
                        '&:hover': {color: location.pathname === route ? theme.textColor : theme.backgroundColor,}
                    }}/>
                </Tooltip>;
            }
            case 'Videos' : {
                return <Tooltip title={"Videos"}>
                    <OndemandVideoIcon
                        sx={{
                            color: location.pathname === route ? theme.textColor : theme.backgroundColor,
                            '&:hover': {color: location.pathname === route ? theme.textColor : theme.backgroundColor,}
                        }}/>
                </Tooltip>;
            }
            case 'TestAPI' : {
                return <Tooltip title={"TestAPI"}>
                    <ApiIcon
                        sx={{
                            color: location.pathname === route ? theme.textColor : theme.backgroundColor,
                            '&:hover': {color: location.pathname === route ? theme.textColor : theme.backgroundColor,}
                        }}/>
                </Tooltip>;
            }
            case 'Chat' : {
                return <Tooltip title={"Chat"}>
                    <TextsmsIcon
                        sx={{
                            color: location.pathname === route ? theme.textColor : theme.backgroundColor,
                            '&:hover': {color: location.pathname === route ? theme.textColor : theme.backgroundColor,}
                        }}/>
                </Tooltip>;
            }
            default:
                return <></>;
        }
    }

    return <Drawer variant="permanent"
                   open={drawerOpen}
                   sx={{
                       '& .MuiDrawer-paper': {
                           backgroundColor: theme.textColor,
                           color: theme.backgroundColor,
                       }
                   }}>
        <DrawerHeader sx={{color: theme.textColor}}>
            <IconButton onClick={() => dispatch(handleDrawerChange(!drawerOpen))}>
                {theme.direction === 'rtl' ? <ChevronRightIcon sx={{color: theme.textColor}}/> :
                    <ChevronLeftIcon sx={{color: theme.textColor}}/>}
            </IconButton>
        </DrawerHeader>
        <Divider/>
        <List sx={{':hover': {cursor: 'pointer'}}}>
            {routes?.map((route, index) => (
                <ListItem key={route.key} className={'Center'} disablePadding sx={{
                    display: 'flex',
                    marginLeft: '0.1em',
                    color: location.pathname === route.url ? theme.textColor : theme.backgroundColor,
                    backgroundColor: location.pathname === route.url ? theme.backgroundColor : theme.textColor,
                    borderRadius: 2
                }}
                          onClick={() => navigate(`${route.url}`)}>
                    {drawerOpen && <ListItemText primary={route.key}/>}
                    <ListItemIcon
                        className={'Center'}
                        sx={{
                            color: location.pathname === route.url ? theme.textColor : theme.backgroundColor,
                            backgroundColor: location.pathname === route.url ? theme.backgroundColor : theme.textColor,
                            minHeight: 38,
                            justifyContent: 'center', borderRadius: 2
                        }}>
                        <Grid container className={'Center'}>
                            {renderIcon(route.key, route.url)}
                        </Grid>
                    </ListItemIcon>
                </ListItem>
            ))}
        </List>
    </Drawer>;
};

export default SideBar;
