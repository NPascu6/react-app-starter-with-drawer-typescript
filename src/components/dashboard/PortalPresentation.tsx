import {useTheme} from "@mui/material/styles";
import img1 from "../../assets/images/portal/portal1.png";
import img2 from "../../assets/images/portal/portal2.png";
import img3 from "../../assets/images/portal/portal3.png";
import img4 from "../../assets/images/portal/portal4.png";
import * as React from "react";
import {Paper} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import useWindowSize from "../../hooks/useWindowSize";

const PortalPresentation = () => {
    const theme = useTheme()
    const images = [img1, img2, img3, img4]
    const windowSize = useWindowSize()

    return <Paper sx={{
        border: '1px solid',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: '0.1em',
        height: '15em',
        margin: '0.2em',
    }}>
        <Carousel sx={{minWidth: windowSize.innerWidth < 500 ? '18.7em' : '29em'}}>
            {
                images.map((item, i) => <img alt={i.toString()} key={i} src={item}
                                             style={{height: '12em', width: '100%'}}/>)
            }
        </Carousel>
    </Paper>
}

export default PortalPresentation
