import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import {ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {useNavigate} from 'react-router-dom';
import {_defaultDrawerWidth} from '../../_constant';
import {useAppDispatch} from '../../store/store';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {handleDrawerChange} from '../../store/appReducer';

const routes = [{key: 'Home', url: '/'},
    {key: 'About', url: '/about'}];

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
    const {
        drawerOpen,
    } = useSelector((state: RootState) => state.app);

    return <Drawer variant="permanent"
                   open={drawerOpen}
    sx={{ '& .MuiDrawer-paper': {
            backgroundColor: theme.textColor,
            color: theme.backgroundColor,
        }}}>
        <DrawerHeader>
            <IconButton onClick={() => dispatch(handleDrawerChange(!drawerOpen))}>
                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
            {routes?.map((route, index) => (
                <ListItem key={route.key} disablePadding sx={{display: 'block'}}
                          onClick={() => navigate(`${route.url}`)}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: drawerOpen ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                        <ListItemIcon
                            sx={{
                                color: theme.palette.secondary.main,
                                minWidth: 0,
                                mr: drawerOpen ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                            {
                                index % 2 === 0 ? <Tooltip title={'Home'}><InboxIcon/></Tooltip> : <Tooltip title={"Short bio"}><MailIcon/></Tooltip>
                            }
                        </ListItemIcon>
                        <ListItemText primary={route.key} sx={{opacity: drawerOpen ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Drawer>;
};

export default SideBar;
