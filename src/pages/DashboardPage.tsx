import * as React from 'react';
import {Suspense, useEffect, useRef} from 'react';
import {Grid, Paper} from "@mui/material";

import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";

import useWindowFocus from "../hooks/useFocusHook";
import LoaderPage from "./LoaderPage";
import {useAppDispatch} from "../store/store";
import {fetchTestUsers} from "../store/thunks/appThunk";
import useToken from "../hooks/useToken";

const OtherComponentsPresentation = React.lazy(() => import('../components/dashboard/TradingAppPresentation'));
const TradingAppPresentation = React.lazy(() => import('../components/dashboard/PortalPresentation'));
const PortalPresentation = React.lazy(() => import('../components/dashboard/OtherComponentsPresentation'));
const WindowPresentation = React.lazy(() => import('../components/dashboard/WindowPresentation'));
const GithubProfileCard = React.lazy(() => import('../components/dashboard/GithubProfileCard'));

export default function DashboardPage() {
    const theme = useTheme()
    const windowSize = useWindowSize()
    const ref = useRef(null);
    const token: any = useToken()
    useWindowFocus(ref)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (token)
            dispatch(fetchTestUsers(token))
    }, [token])

    return (
        <Grid container className={'Center'}
              ref={ref}
              sx={{justifyContent: 'space-evenly', '& .widget.g-background-default.g-shadow-inset': {display: 'none'}}}>
            <Suspense fallback={<LoaderPage/>}>
                <GithubProfileCard/>
            </Suspense>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '15em' : '25.2em',
            }}>
                <Suspense fallback={<LoaderPage/>}>
                    <TradingAppPresentation/>
                    <WindowPresentation/>
                </Suspense>
            </Paper>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '15em' : '25.2em',
            }}>
                <Suspense fallback={<LoaderPage/>}>
                    <PortalPresentation/>
                    <OtherComponentsPresentation/>
                </Suspense>
            </Paper>
        </Grid>
    );
}
