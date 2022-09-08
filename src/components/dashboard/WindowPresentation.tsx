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
import {Grid, Paper, Typography} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import useWindowSize from "../../hooks/useWindowSize";

const WindowPresentation = () => {
    const theme = useTheme()
    const images = [img1, img2, img3, img4, img6, img7, img8, img9]
    const windowSize = useWindowSize()

    return <Paper sx={{
        margin: '0.2em',
        border: '1px solid',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: '0.1em',
        height: '15em'
    }}>
        <Grid container>
            <Typography variant={"h6"}>Sample windows:</Typography>
            <Carousel
                interval={2200}
                sx={{minWidth: windowSize.innerWidth < 500 ? '18.7em' : '29em'}}>
                {
                    images.map((item, i) => <img alt={i.toString()} key={i} src={item}
                                                 style={{height: '12em', width: '100%'}}/>)
                }
            </Carousel>
            <Typography variant={"body2"}>Order book, depth char L2 cumulative using Highcharts React.
                ws.</Typography>
        </Grid>
    </Paper>
}

export default WindowPresentation
