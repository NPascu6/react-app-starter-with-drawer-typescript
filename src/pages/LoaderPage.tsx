import {CircularProgress, LinearProgress, Typography} from '@mui/material';
import {useTheme} from "@mui/material/styles";

const LoaderPage = () => {
    const theme = useTheme()

    return (
        <div style={{display: 'flex',
            flex: 1,
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
            minHeight: '15em',
        }}
             className={'Center'}>
            <Typography variant="h6" gutterBottom>
                Loading ...
            </Typography>
            <LinearProgress color="secondary"/>
            <CircularProgress variant="indeterminate"
                              sx={{marginTop: '0.2em', color: 'orange', height: '1em', width: '1em'}}/>
        </div>
    );
};

export default LoaderPage;
