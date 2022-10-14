import * as React from 'react';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {Grid, Paper} from "@mui/material";
import GithubProfileCard from "../components/dashboard/GithubProfileCard";
import TradingAppPresentation from "../components/dashboard/TradingAppPresentation";
import PortalPresentation from "../components/dashboard/PortalPresentation";
import WindowPresentation from "../components/dashboard/WindowPresentation";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import {finnHubClient} from "../services/FinhubRestService";
import {socket} from "../services/FinhubWebsocket";
import {useAppDispatch} from "../store/store";
import {subscribeCryptoTicker} from "../store/thunks/finHubThunk";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import AGGridComponent from "../components/shared/AGGridComponent";
import {ColDef, ColGroupDef, GridApi, GridReadyEvent} from "ag-grid-community";

export default function DashboardPage() {
    const theme = useTheme()
    const windowSize = useWindowSize()
    const finhub = finnHubClient
    const dispatch = useAppDispatch()
    const hub = socket
    const [instruments, setInstruments] = useState<any>([])
    const {finhubMessages} = useSelector((state: RootState) => state.app);
    const [isConnected, setIsConnected] = useState(true)
    const [gridApi, setGridApi] = useState<GridApi>();

    useEffect(() => {
        if (finhub && instruments.length === 0) {
            finhub.cryptoSymbols('BINANCE', (error: any, data: any, response: any) => {
                console.log(data)
                const newData = data.filter((d: any) => ((d.symbol.includes('ETH') ||
                        d.symbol.includes('BTC') ||
                        d.symbol.includes('SOL') ||
                        d.symbol.includes('DOT') ||
                        d.symbol.includes('USDC') ||
                        d.symbol.includes('XRP'))
                    && d.symbol.includes('USDT') && d.symbol.split(':')[1].length === 7)).map((d: any) => d.symbol)
                console.log(newData)
                setInstruments(newData)
            });
        }
    }, [finhub, dispatch, instruments])

    useEffect(() => {
        if (hub && instruments.length > 0 && isConnected) {
            setIsConnected(false)
            dispatch(subscribeCryptoTicker('BINANCE', instruments))

        }
    }, [hub, instruments, dispatch, isConnected])

    const getColumnDefs = useMemo((): (ColDef | ColGroupDef)[] => {
        return [
            {
                field: 'venue',
                minWidth: 100,
                maxWidth: 100,
                headerName: 'Venue',
                sortable: true,
                filter: true,
                enableCellChangeFlash: true
            },
            {
                field: 'symbol',
                minWidth: 100,
                maxWidth: 100,
                sortable: true,
                headerName: 'Symbol',
                enableCellChangeFlash: true
            },
            {
                field: 'price',
                headerName: 'Price',
                enableCellChangeFlash: true,
            },
            {
                field: 'volume',
                headerName: 'Volume',
                enableCellChangeFlash: true,
            },
        ];
    }, []);


    const onGridReady = useCallback((params: GridReadyEvent) => {
        setGridApi(params.api);
    }, []);

    return (
        <Grid container className={'Center'}
              sx={{justifyContent: 'space-evenly', '& .widget.g-background-default.g-shadow-inset': {display: 'none'}}}>
            <GithubProfileCard/>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <TradingAppPresentation/>
                <WindowPresentation/>
            </Paper>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '19em' : '30em',
            }}>
                <PortalPresentation/>
                <Paper sx={{
                    border: '1px solid',
                    backgroundColor: theme.palette.secondary.main,
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    padding: '0.1em',
                    width: '100%',
                    height: '100%'
                }} className={'Center'}>
                    <div style={{
                        flex: 1,
                        overflow: 'hidden',
                        backgroundColor: theme.palette.background.default,
                        width: '100%',
                        height: '100%'
                    }}>
                        <AGGridComponent items={finhubMessages}
                                         gridApi={gridApi}
                                         onGridReady={onGridReady}
                                         getColumnDefs={getColumnDefs}
                                         rowId={'symbol'}/>
                    </div>

                </Paper>
            </Paper>
        </Grid>
    );
}
