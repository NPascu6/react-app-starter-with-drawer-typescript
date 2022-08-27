import * as React from 'react';
import {Grid} from "@mui/material";
import GithubProfileCard from "../components/dashboard/GithubProfileCard";

import TradingAppPresentation from "../components/dashboard/TradingAppPresentation";
import YoutubeVideoLink from "../components/dashboard/YoutubeVideoLink";

export default function DashboardPage() {
    return (
        <Grid container style={{display: 'flex'}}>
            <GithubProfileCard/>
            <YoutubeVideoLink/>
            <TradingAppPresentation/>
        </Grid>
    );
}
