import {useTheme} from "@mui/material/styles";
import {Grid, Link, Typography} from "@mui/material";

const AppFooter = () => {
    const theme = useTheme();

    return <Grid container className={'Center'} sx={{
        marginTop: '0.2em',
        height: '5.8em',
        position: "relative",
        bottom: 0,
        color: theme.backgroundColor,
        backgroundColor: theme.textColor
    }}>
        <Typography variant={"body2"} sx={{paddingLeft: '4em'}}>
            Created by N. Pascu, using React 18 and MUI 6. Last update 11/28/2022 - 5:29.
            The code is available on my github: <Link
            href={'https://github.com/NPascu6/react-app-starter-with-drawer-typescript'} sx={{
            cursor: 'pointer',
            ':hover': {color: theme.backgroundColor, backgroundColor: theme.textColor}
        }}>https://github.com/NPascu6/react-app-starter-with-drawer-typescript.</Link>
        </Typography>
    </Grid>
}

export default AppFooter
