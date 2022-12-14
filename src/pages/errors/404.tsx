import {Button, Slide, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div>
            <div>
                <Slide direction="down" in>
                    <Typography variant="h1" gutterBottom>
                        404
                    </Typography>
                </Slide>
                <Typography variant="h4" gutterBottom>
                    [Oops! Page Not Found]
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Sorry but we could not find the page you are looking for
                </Typography>
                <Button variant="contained" color="primary" to="/" component={Link}>
                    Go to Home
                </Button>
            </div>
        </div>
    );
};
