import {Paper} from "@mui/material";
import * as React from "react";
import img1 from '../../assets/images/TradingApp1.png'
import img2 from '../../assets/images/TradingApp2.png'
import img3 from '../../assets/images/TradingApp3.png'
import img4 from '../../assets/images/TradingApp4.png'
import img5 from '../../assets/images/TradingApp5.png'
import img6 from '../../assets/images/TradingApp6.png'
import {useTheme} from "@mui/material/styles";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomCarousel from "../shared/CustomCarousel";

const TradingAppPresentation = () => {
    const theme = useTheme()
    const images = [
        {original: img1, thumbnail: img1, thumbnailHeight: 60},
        {original: img2, thumbnail: img2, thumbnailHeight: 60},
        {original: img3, thumbnail: img3, thumbnailHeight: 60},
        {original: img4, thumbnail: img4, thumbnailHeight: 60},
        {original: img5, thumbnail: img5, thumbnailHeight: 60},
        {original: img6, thumbnail: img6, thumbnailHeight: 60}
    ]

    return <Paper sx={{
        border: '1px solid',
        backgroundColor: theme.backgroundColor,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: '0.1em',
        height: '15em'
    }}>
        <CustomCarousel images={images}
                        type={'image'}
                        description={'Openfin, React 18, SignalR.'}/>

    </Paper>
}

export default TradingAppPresentation
