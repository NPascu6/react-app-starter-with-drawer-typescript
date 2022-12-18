import {CssBaseline, Grid, Link, Paper, Slide, Typography} from '@mui/material';
import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {useTheme} from "@mui/material/styles";
import {auth} from "../../services/firebase/firebase";

export const ForbiddenPage = () => {
    const [user] = useAuthState(auth);
    const theme = useTheme()

    return (
        <>
            <CssBaseline/>
            <Paper sx={{
                padding: '2em',
                backgroundColor: theme.backgroundColor,
                color: theme.textColor
            }}>
                <Slide direction="down" in>
                    <Typography variant="h3" gutterBottom>
                        403
                    </Typography>
                </Slide>
                <Typography variant="h5" gutterBottom>
                    [Oops! Forbidden]
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Hey, unfortunately you are not allowed to access this page
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Please contact us via{' '}
                    <span
                        style={{
                            textDecoration: 'underline',
                        }}
                    >
                            support&#64; kidding... <Link sx={{color: theme.textColor}}
                                                          href={'mailto:norbipascu92@gmail.com'}>norbipascu92@gmail.com</Link>
                        </span>
                </Typography>
                {user && (
                    <Grid container className={'Center'} sx={{display: 'flex'}}>
                        <Grid container item>
                            <Typography variant={"body2"}>Your account
                                - <b>{user.email}</b>
                            </Typography>
                        </Grid>
                        <Grid container item>
                            <Typography variant={"body2"}>Email verified
                                - <b>{user.emailVerified}</b>
                            </Typography>
                        </Grid>
                        <Grid container item>
                            <Typography variant={"body2"}>Created at
                                - <b>{user.metadata.creationTime}</b>
                            </Typography>
                        </Grid>
                        <Grid container item>
                            <Typography variant={"body2"}>Last sign in
                                - <b>{user.metadata.lastSignInTime}</b>
                            </Typography>
                        </Grid>
                    </Grid>
                )}
            </Paper>
        </>
    );
};
