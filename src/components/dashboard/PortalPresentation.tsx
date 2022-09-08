import {useTheme} from "@mui/material/styles";
import img1 from "../../assets/images/portal/portal1.png";
import img2 from "../../assets/images/portal/portal2.png";
import img3 from "../../assets/images/portal/portal3.png";
import img4 from "../../assets/images/portal/portal4.png";
import * as React from "react";
import {Grid, Paper, Typography} from "@mui/material";
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
        <Grid container>
            <Typography variant={"h6"}>Sample images from portal application and OTC order window.</Typography>
            <Carousel interval={2100}
                      fullHeightHover={true}
                      sx={{minWidth: windowSize.innerWidth < 500 ? '18.7em' : '29em'}}>
                {
                    images.map((item, i) => <img alt={i.toString()} key={i} src={item}
                                                 style={{height: '12em', width: '100%'}}/>)
                }
            </Carousel>
            <Typography variant={"body2"}>Ag grid used for tables and rendering updates on dynamic data.
                ws.</Typography>

        </Grid>
    </Paper>
}

export default PortalPresentation
