import * as React from 'react';
import {useRef} from 'react';
import {Grid, Paper} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import YoutubeVideoLink1 from "../components/videos/YoutubeVideoLinkApp1";
import YoutubeVideoLink2 from "../components/videos/YoutubeVideoLinkApp2";
import YoutubeVideoLink3 from "../components/videos/YoutubeVideoLinkApp3";
import YoutubeVideoLink4 from "../components/videos/YoutubeVideoLinkApp4";
import useWindowFocus from "../hooks/useFocusHook";

export default function DashboardPage() {
    const theme = useTheme()
    const windowSize = useWindowSize()
    const ref = useRef(null);
    useWindowFocus(ref)

    return (
        <Grid container className={'Center'}
              ref={ref}
              sx={{justifyContent: 'space-evenly', '& .widget.g-background-default.g-shadow-inset': {display: 'none'}}}>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <YoutubeVideoLink1/>
                <YoutubeVideoLink2/>
            </Paper>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <YoutubeVideoLink3/>
                <YoutubeVideoLink4/>
            </Paper>
        </Grid>
    );
}
