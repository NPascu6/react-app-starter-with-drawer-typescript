import {Paper} from "@mui/material";
import * as React from "react";
import {useTheme} from "@mui/material/styles";

const YoutubeVideoLink = () => {
    const theme = useTheme()

    return <Paper sx={{
        border: '1px solid',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    }}>
        <iframe
            title={'Youtube'}
            style={{minWidth: '10em', maxWidth: '30em'}}
            width="100%" height="250" src="https://www.youtube.com/embed/sZAjLrzEOOQ"
            frameBorder="0"
            allowFullScreen/>

    </Paper>
}

export default YoutubeVideoLink
