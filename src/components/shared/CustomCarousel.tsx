import * as React from "react";
import {useState} from "react";
import {Grid, Paper, Typography} from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import ImageGallery from 'react-image-gallery';

interface Props {
    images: any
    description: string
}

const CustomCarousel = ({images, description}: Props) => {
    const windowSize = useWindowSize()
    const [fullScreen, setFullScreen] = useState<boolean>(false)

    return <Grid container sx={{
        width:  windowSize.innerWidth < 600 ? '100%' : '90%',
        minWidth: windowSize.innerWidth < 600 ? '18em' : '29em',
        '& .image-gallery-thumbnails-container': {
            height: '4em',
            width: windowSize.innerWidth < 600 ? '18em' : '29em',
        },
        '& .image-gallery-svg': {
            height: '30px',
            width: '20px'
        }
    }}>
        <ImageGallery items={images}
                      style={{width: '29em'}}
                      useBrowserFullscreen={false}
                      onScreenChange={() => setFullScreen(!fullScreen)}
                      renderItem={(item: any) => <Paper className={'Center'}
                                                        sx={{
                                                            flex: 1,
                                                            display: 'flex',
                                                            backgroundColor: 'black'
                                                        }}>
                          <img alt={item.original}
                               src={item.original}
                               height={!fullScreen ? 200 : 'auto'}
                               width={!fullScreen ? 300 : '100%'}>
                          </img>
                      </Paper>}/>
        <Typography variant={"body2"}>{description}</Typography>
    </Grid>
}

export default CustomCarousel
