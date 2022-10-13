import * as React from 'react';
import {Grid, Paper} from "@mui/material";
import GithubProfileCard from "../components/dashboard/GithubProfileCard";
import TradingAppPresentation from "../components/dashboard/TradingAppPresentation";
import PortalPresentation from "../components/dashboard/PortalPresentation";
import WindowPresentation from "../components/dashboard/WindowPresentation";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import VideoPresentation from "../components/dashboard/VideoPresentation";
import ReactPlayer from "react-player";

export default function DashboardPage() {
    const theme = useTheme()
    const windowSize = useWindowSize()

    return (
        <Grid container className={'Center'} sx={{justifyContent: 'space-evenly', '& .widget.g-background-default.g-shadow-inset': {display: 'none'}}}>
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
                <VideoPresentation/>
            </Paper>
            <div className={'Center'} style={{
                height: '2em',
                display: 'none',
            }}>
                <ReactPlayer
                    volume={0.01}
                    loop={true}
                    controls={true}
                    playing={true}
                    url="https://soundcloud.com/trndmusik/sam-goku-temper"
                />
            </div>
        </Grid>
    );
}
