import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {Grid, Link, Paper, Typography} from "@mui/material";
import * as React from "react";
import {Suspense, useRef} from "react";
import LoaderPage from "./LoaderPage";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import useWindowFocus from "../hooks/useFocusHook";

const TestAPIUsers = React.lazy(() => import('../components/test-api/TestAPIUsers'));
const TestAPIUserDetails = React.lazy(() => import('../components/test-api/TestAPIUserDetails'));
const TestAPIUserRoles = React.lazy(() => import('../components/test-api/TestAPIUserRoles'));
const TestAPIAssets = React.lazy(() => import('../components/test-api/TestAPIAssets'));
const TestAPIWallets = React.lazy(() => import('../components/test-api/TestAPIWallets'));

const TestAPIPage = () => {
    const {
        allTestAssets,
        allTestUserDetails,
        allTestUserRoles,
        allTestUsers,
        allTestWallets
    } = useSelector((state: RootState) => state.testAPI);
    const theme = useTheme()
    const windowSize = useWindowSize()
    const ref = useRef(null);
    useWindowFocus(ref)

    return <>
        <Grid sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <Typography className={'Center'} sx={{backgroundColor: theme.backgroundColor, width: '100%'}}
                        variant={"h5"}>Page is connected to my personal AzureDB trough my personal API hosted as
                well on Azure:<Link
                    sx={{color: theme.textColor}}
                    href={'https://github.com/NPascu6/ASP_.NET_Starter_API'}>
                    <Typography variant={"body2"}>
                        https://github.com/NPascu6/ASP_.NET_Starter_API
                    </Typography>
                </Link>
            </Typography>
            <Grid container
                  className={'Center'}
                  ref={ref}
                  sx={{
                      height: '100%',
                      justifyContent: 'space-evenly',
                      '& .widget.g-background-default.g-shadow-inset': {display: 'none'}
                  }}>
                <Paper elevation={3} sx={{
                    padding: '0.5em',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: windowSize.innerWidth < 500 ? '15em' : '40em',
                }}>
                    <Suspense fallback={<LoaderPage/>}>
                        <TestAPIUsers items={allTestUsers}/>
                    </Suspense>
                </Paper>
                <Paper elevation={3} sx={{
                    padding: '0.5em',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: windowSize.innerWidth < 500 ? '15em' : '40em',
                }}>
                    <Suspense fallback={<LoaderPage/>}>
                        <TestAPIUserDetails items={allTestUserDetails}/>
                    </Suspense>
                </Paper>
                <Paper elevation={3} sx={{
                    padding: '0.5em',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: windowSize.innerWidth < 500 ? '15em' : '20em',
                }}>
                    <Suspense fallback={<LoaderPage/>}>
                        <TestAPIUserRoles items={allTestUserRoles}/>
                    </Suspense>
                </Paper>

                <Paper elevation={3} sx={{
                    padding: '0.5em',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: windowSize.innerWidth < 500 ? '15em' : '30em',
                }}>
                    <Suspense fallback={<LoaderPage/>}>
                        <TestAPIAssets items={allTestAssets}/>
                    </Suspense>
                </Paper>
                <Paper elevation={3} sx={{
                    padding: '0.5em',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: windowSize.innerWidth < 500 ? '15em' : '30em',
                }}>
                    <Suspense fallback={<LoaderPage/>}>
                        <TestAPIWallets items={allTestWallets}/>
                    </Suspense>
                </Paper>
            </Grid>
        </Grid>
    </>
}

export default TestAPIPage;
