import {styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import React from 'react';
import {_defaultDrawerWidth} from '../../_constant';
import {useAppDispatch} from '../../store/store';
import {handleDrawerChange} from '../../store/appReducer';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
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
    const dispatch = useAppDispatch();
    const {
        drawerOpen,
    } = useSelector((state: RootState) => state.app);

    return <AppBar position="fixed" open={drawerOpen}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => dispatch(handleDrawerChange(!drawerOpen))}
                edge="start"
                sx={{
                    marginRight: 5,
                    ...(drawerOpen && {display: 'none'}),
                }}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Top Bar
            </Typography>
        </Toolbar>
    </AppBar>;
};

export default AppBarComponent;