import {useTheme} from "@mui/material/styles";
import img1 from "../../assets/images/windows/example1.png";
import img2 from "../../assets/images/windows/example2.png";
import img3 from "../../assets/images/windows/example3.png";
import img4 from "../../assets/images/windows/example4.png";
import img6 from "../../assets/images/windows/example6.png";
import img7 from "../../assets/images/windows/example7.png";
import img8 from "../../assets/images/windows/example8.png";
import img9 from "../../assets/images/windows/example9.png";

import * as React from "react";
import {Paper} from "@mui/material";
import img5 from "../../assets/images/TradingApp5.png";
import CustomCarousel from "../shared/CustomCarousel";

const WindowPresentation = () => {
    const theme = useTheme()
    const images = [
        {original: img1, thumbnail: img1, thumbnailHeight: 60},
        {original: img2, thumbnail: img2, thumbnailHeight: 60},
        {original: img3, thumbnail: img3, thumbnailHeight: 60},
        {original: img4, thumbnail: img4, thumbnailHeight: 60},
        {original: img5, thumbnail: img5, thumbnailHeight: 60},
        {original: img6, thumbnail: img6, thumbnailHeight: 60},
        {original: img7, thumbnail: img7, thumbnailHeight: 60},
        {original: img8, thumbnail: img8, thumbnailHeight: 60},
        {original: img9, thumbnail: img9, thumbnailHeight: 60}
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
                        description={'Order book, depth char L2 cumulative using Highcharts React.'}/>
    </Paper>
}

export default WindowPresentation
