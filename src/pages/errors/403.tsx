import {CssBaseline, Slide, Typography} from '@mui/material';
import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebase";

export const ForbiddenPage = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            <CssBaseline/>
            <div>
                <div>
                    <Slide direction="down" in>
                        <Typography variant="h1" gutterBottom>
                            403
                        </Typography>
                    </Slide>
                    <Typography variant="h4" gutterBottom>
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
                            support&#64;pascu.io
                        </span>
                    </Typography>
                    {user && (
                        <Typography variant="subtitle1" gutterBottom>
                            Your account - <b>{user.email}</b>
                        </Typography>
                    )}
                </div>
            </div>
        </>
    );
};
