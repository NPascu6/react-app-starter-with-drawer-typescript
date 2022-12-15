import {Grid, IconButton, TextField} from "@mui/material";
import React, {useState} from "react";
import {Theme, useTheme} from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


interface GridToolbarProps {
    gridApi: any
}

const GridToolbar = ({gridApi}: GridToolbarProps) => {
    const theme: Theme = useTheme();
    const [searchValue, setSearchValue] = useState<string>("")

    const onFilterTextBoxChanged = (e) => {
        gridApi.setQuickFilter(e.target.value);
        setSearchValue(e.target.value);
    };

    return <Grid container>
        <Grid item xs={10}>
            <TextField
                sx={{width: '100%'}}
                inputProps={{
                    sx: {
                        color: theme.textColor,
                        backgroundColor: theme.backgroundColor,
                        borderRadius: 0
                    }
                }}
                size={'small'}
                type="text"
                variant={'outlined'}
                value={searchValue}
                placeholder="Filter..."
                onChange={e => onFilterTextBoxChanged(e)}/>
        </Grid>
        <Grid item xs={2} className={'Center'} sx={{backgroundColor: theme.backgroundColor}}>
            <IconButton sx={{color: theme.textColor, height: '1em', width: '1em'}}>
                <AddIcon sx={{height: '0.7em', width: '0.7em'}}/>
            </IconButton>
            <IconButton sx={{color: theme.textColor, height: '1em', width: '1em'}}>
                <RestartAltIcon sx={{height: '0.7em', width: '0.7em'}}/>
            </IconButton>
        </Grid>
    </Grid>
}

export default GridToolbar;
