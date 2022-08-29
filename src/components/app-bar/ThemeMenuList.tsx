import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {setTheme} from "../../store/appReducer";
import {useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";

const ThemeMenuList = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();
    const [selectedTheme, setSelectedTheme] = useState<string>("lightTheme")
    const {theme} = useSelector((state: RootState) => state.app);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (selectedTheme !== theme) {
            debugger
            dispatch(setTheme(selectedTheme))
        }
    }, [selectedTheme])

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Themes
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem selected={selectedTheme === 'lightTheme'}
                          onClick={() => setSelectedTheme('lightTheme')}>
                    Light Theme
                </MenuItem>
                <MenuItem selected={selectedTheme === 'darkTheme'}
                          onClick={() => setSelectedTheme('darkTheme')}>
                    Dark Theme
                </MenuItem>
                <MenuItem selected={selectedTheme === 'pinkLightTheme'}
                          onClick={() => setSelectedTheme('pinkLightTheme')}>
                    Pink Light Theme
                </MenuItem>
                <MenuItem selected={selectedTheme === 'pinkDarkTheme'}
                          onClick={() => setSelectedTheme('pinkDarkTheme')}>
                    Pink Dark Theme
                </MenuItem>
            </Menu>
        </div>
    );
}

export default ThemeMenuList
