import {Paper} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import {useTheme} from "@mui/material/styles";
import ReactPlayer from "react-player/lazy";

const YoutubeVideoLink2 = () => {
    const theme = useTheme()
    const [, setWindowSize] = useState(getWindowSize());

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
        <ReactPlayer
            controls={true}
            loop={true}
            playing={false}
            url={"https://youtu.be/jGah_U_GBuI"}/>

    </Paper>
}

export default YoutubeVideoLink2
