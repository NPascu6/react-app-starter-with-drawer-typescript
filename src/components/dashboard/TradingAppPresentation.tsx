import {Paper, Typography} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import * as React from "react";
import img1 from '../../assets/images/TradingApp1.png'
import img2 from '../../assets/images/TradingApp2.png'
import img3 from '../../assets/images/TradingApp3.png'
import img4 from '../../assets/images/TradingApp4.png'
import img5 from '../../assets/images/TradingApp5.png'
import {useTheme} from "@mui/material/styles";

const TradingAppPresentation = () => {
    const theme = useTheme()
    const images = [img1, img2, img3, img4, img5]

    return <Paper sx={{
        border: '1px solid',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    }}>
        <Carousel sx={{width: '40em', height: '23em'}}>
            {
                images.map((item, i) => <>
                    <Typography></Typography>
                    <img alt={i.toString()} key={i} src={item} style={{height: '20em', width: '40em'}}/>
                </>)
            }
        </Carousel>
    </Paper>
}

export default TradingAppPresentation
