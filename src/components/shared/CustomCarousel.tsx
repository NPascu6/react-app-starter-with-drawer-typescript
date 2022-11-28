import * as React from "react";
import {useState} from "react";
import {Grid, Paper, Typography} from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player/lazy'
import {useTheme} from "@mui/material/styles";

interface Props {
    images: any
    description: string
    type: string
}

const CustomCarousel = ({images, description, type}: Props) => {
    const windowSize = useWindowSize()
    const [fullScreen, setFullScreen] = useState<boolean>(false)
    const theme = useTheme()

    return <Grid className={'Center'} container sx={{
        width: windowSize.innerWidth < 600 ? '100%' : '90%',
        minWidth: windowSize.innerWidth < 600 ? '15em' : '25em',
        '& .image-gallery-thumbnails-container': {
            height: '3em',
            width: windowSize.innerWidth < 600 ? '15em' : '25em',
        },
        '& .image-gallery-svg': {
            height: '25px',
            width: '20px'
        },
        '& .image-gallery-content.fullscreen': {
            marginLeft: 8,
        }
    }}>
        <ImageGallery items={images}
                      style={{width: '25.2em'}}
                      useBrowserFullscreen={false}
                      onScreenChange={() => setFullScreen(!fullScreen)}
                      renderItem={(item: any) => <Paper className={'Center'}
                                                        sx={{
                                                            flex: 1,
                                                            display: 'flex',
                                                            backgroundColor: 'black'
                                                        }}>
                          {type === 'image' ? <img alt={item.original}
                                                   src={item.original}
                                                   height={!fullScreen ? 200 : windowSize.innerHeight - 100}
                                                   width={!fullScreen ? 300 : windowSize.innerWidth - 100}
                          >
                          </img> : <div className={'Center'} style={{
                              height: !fullScreen ? 200 : windowSize.innerHeight - 100,
                              width: !fullScreen ? 460 : windowSize.innerWidth - 100,
                              display: 'flex'
                          }}>
                              <ReactPlayer muted={true}
                                           controls={true}
                                           progressInterval={20000}
                                           loop={true}
                                           playing={true}
                                           url={item.original}/>
                          </div>}
                      </Paper>}/>
        <Typography sx={{color: theme.textColor}} variant={"body2"}>{description}</Typography>
    </Grid>
}

export default CustomCarousel
