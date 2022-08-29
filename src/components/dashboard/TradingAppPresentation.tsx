import {Paper} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import * as React from "react";
import img1 from '../../assets/images/TradingApp1.png'
import img2 from '../../assets/images/TradingApp2.png'
import img3 from '../../assets/images/TradingApp3.png'
import img4 from '../../assets/images/TradingApp4.png'
import img5 from '../../assets/images/TradingApp5.png'
import img6 from '../../assets/images/TradingApp6.png'
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../../hooks/useWindowSize";

const TradingAppPresentation = () => {
    const theme = useTheme()
    const images = [img1, img2, img3, img4, img5, img6]
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
        <Carousel sx={{minWidth: windowSize.innerWidth < 500 ? '18.7em' : '29em'}}>
            {
                images.map((item, i) => <img alt={i.toString()} key={i} src={item}
                                             style={{height: '12em', width: '100%'}}/>)
            }
        </Carousel>
    </Paper>
}

export default TradingAppPresentation
