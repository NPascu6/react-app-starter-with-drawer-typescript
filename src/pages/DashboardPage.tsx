import * as React from 'react';
import {Grid, Paper} from "@mui/material";
import GithubProfileCard from "../components/dashboard/GithubProfileCard";

import TradingAppPresentation from "../components/dashboard/TradingAppPresentation";
import PortalPresentation from "../components/dashboard/PortalPresentation";
import WindowPresentation from "../components/dashboard/WindowPresentation";
import {useTheme} from "@mui/material/styles";

export default function DashboardPage() {
    const theme = useTheme()

    return (
        <Grid container className={'Center'} sx={{justifyContent: 'space-evenly'}}>
            <GithubProfileCard/>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.secondary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '30em',
            }}>
                <TradingAppPresentation/>
                <WindowPresentation/>
                <PortalPresentation/>
            </Paper>
        </Grid>
    );
}
