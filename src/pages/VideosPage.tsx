import * as React from 'react';
import {Suspense, useRef} from 'react';
import {Grid, Paper} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import useWindowFocus from "../hooks/useFocusHook";
import LoaderPage from "./LoaderPage";

const YoutubeVideoLink1 = React.lazy(() => import('../components/videos/YoutubeVideoLinkApp1'));
const YoutubeVideoLink2 = React.lazy(() => import('../components/videos/YoutubeVideoLinkApp2'));
const YoutubeVideoLink3 = React.lazy(() => import('../components/videos/YoutubeVideoLinkApp3'));
const YoutubeVideoLink4 = React.lazy(() => import('../components/videos/YoutubeVideoLinkApp4'));

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
                backgroundColor: theme.backgroundColor,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <Suspense fallback={<LoaderPage/>}>
                    <YoutubeVideoLink1/>
                    <YoutubeVideoLink2/>
                </Suspense>
            </Paper>
            <Paper elevation={3} sx={{
                backgroundColor: theme.backgroundColor,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <Suspense fallback={<LoaderPage/>}>
                    <YoutubeVideoLink3/>
                    <YoutubeVideoLink4/>
                </Suspense>
            </Paper>
        </Grid>
    );
}
