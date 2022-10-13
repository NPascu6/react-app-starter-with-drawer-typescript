import {useTheme} from "@mui/material/styles";
import img1 from "../../assets/images/portal/portal1.png";
import img2 from "../../assets/images/portal/portal2.png";
import img3 from "../../assets/images/portal/portal3.png";
import img4 from "../../assets/images/portal/portal4.png";
import * as React from "react";
import {Paper} from "@mui/material";
import CustomCarousel from "../shared/CustomCarousel";

const PortalPresentation = () => {
    const theme = useTheme()
    const images = [
        {original: img1, thumbnail: img1, thumbnailHeight : 60},
        {original: img2, thumbnail: img2, thumbnailHeight : 60},
        {original: img3, thumbnail: img3, thumbnailHeight : 60},
        {original: img4, thumbnail: img4, thumbnailHeight : 60}
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
        <CustomCarousel images={images}
                        type={'image'}
                        description={'Ag grid used for tables ' +
                        'and rendering updates on dynamic data.'}/>
    </Paper>
}

export default PortalPresentation
