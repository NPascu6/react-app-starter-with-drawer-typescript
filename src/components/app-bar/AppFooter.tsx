import {useTheme} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";

const AppFooter = () => {
    const theme = useTheme();

    return <Grid container className={'Center'} style={{
        position: "absolute",
        bottom: 0,
        color: theme.backgroundColor,
        backgroundColor: theme.textColor
    }}>
        <Typography variant={"body2"} sx={{paddingLeft: '4em'}}>
            Created by N. Pascu, using React 18 and MUI 6. Last update 11/28/2022 - 5:29.
            The code is available on my github.
        </Typography>
    </Grid>
}

export default AppFooter
