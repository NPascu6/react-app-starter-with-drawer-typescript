import {styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import React from 'react';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

interface AppBarComponentProps {
    open: any,
    handleDrawerOpen: any
}

const AppBarComponent = ({open, handleDrawerOpen}: AppBarComponentProps) => {
    return <AppBar position="fixed" open={open}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                    marginRight: 5,
                    ...(open && {display: 'none'}),
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