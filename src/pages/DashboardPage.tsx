import * as React from 'react';
import {Grid, Paper} from "@mui/material";
import GithubProfileCard from "../components/dashboard/GithubProfileCard";
import TradingAppPresentation from "../components/dashboard/TradingAppPresentation";
import PortalPresentation from "../components/dashboard/PortalPresentation";
import WindowPresentation from "../components/dashboard/WindowPresentation";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import OtherComponentsPresentation from "../components/dashboard/OtherComponentsPresentation";
import useWindowFocus from "../hooks/useFocusHook";
import {useRef} from "react";

export default function DashboardPage() {
    const theme = useTheme()
    const windowSize = useWindowSize()
    const ref = useRef(null);
    useWindowFocus(ref)

    return (
        <Grid container className={'Center'}
              ref={ref}
              sx={{justifyContent: 'space-evenly', '& .widget.g-background-default.g-shadow-inset': {display: 'none'}}}>
            <GithubProfileCard/>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <TradingAppPresentation/>
                <WindowPresentation/>
            </Paper>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <PortalPresentation/>
                <OtherComponentsPresentation/>
            </Paper>
        </Grid>
    );
}
