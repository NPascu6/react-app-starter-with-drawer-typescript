import {Paper} from "@mui/material";
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomCarousel from "../shared/CustomCarousel";

const VideoPresentation = () => {
    const theme = useTheme()
    const images = [
        {original: '/Videos/Ski.mp4', thumbnail: ''},
        {original: '/Videos/Ski2.mp4', thumbnail: ''},
        {original: '/Videos/Ski3.mp4', thumbnail: ''},
        {original: '/Videos/Ski4.mp4', thumbnail: ''},
    ]

    return <Paper sx={{
        border: '1px solid',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: '0.1em',
        height: '17em',
    }}>
        <CustomCarousel type={'video'} images={images}
                        description={''}/>

    </Paper>
}

export default VideoPresentation
