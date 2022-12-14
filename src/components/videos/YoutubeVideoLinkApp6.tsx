import {Paper} from "@mui/material";
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../../hooks/useWindowSize";

const YoutubeVideoLink6 = () => {
    const theme = useTheme()
    const windowSize = useWindowSize()

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
                minWidth: windowSize.innerWidth < 500 ? '18em' : '20em'
            }}
            width="100%" height="250" src="https://www.youtube.com/watch?v=isTUIKnZl_0"
            frameBorder="0"
            allowFullScreen/>

    </Paper>
}

export default YoutubeVideoLink6
