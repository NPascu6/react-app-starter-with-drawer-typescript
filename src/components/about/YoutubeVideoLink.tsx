import {Paper} from "@mui/material";
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import {useEffect, useState} from "react";

const YoutubeVideoLink = () => {
    const theme = useTheme()
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return <Paper sx={{
        border: '1px solid',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: '1em'
    }}>
        <iframe
            title={'Youtube'}
            style={{
                minWidth: windowSize.innerWidth < 500 ? '18em' : '30em'
            }}
            width="100%" height="250" src="https://www.youtube.com/embed/sZAjLrzEOOQ"
            frameBorder="0"
            allowFullScreen/>

    </Paper>
}

export default YoutubeVideoLink
