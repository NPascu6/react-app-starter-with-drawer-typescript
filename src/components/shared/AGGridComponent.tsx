import {AgGridReact} from 'ag-grid-react';
import {DefaultColumnDef, DefaultSideBarDef, DefaultStatusPanelDef} from '../../helpers/agGrid';
import React, {useCallback, useState} from 'react';
import {ColDef, ColGroupDef, FirstDataRenderedEvent, GetRowIdParams, GridApi} from 'ag-grid-community';
import {Theme, useTheme} from '@mui/material/styles';
import clsx from 'clsx';
import useAgGridResizeHook from '../../hooks/useAgGridResizeHook';
import useAgGridThemeHook from '../../hooks/useAgGridThemeHook';

interface AGGridProps {
    items: any[],
    onGridReady: any,
    getColumnDefs: (ColDef | ColGroupDef)[],
    rowId: string,
    rowId1?: string,
    rowId2?: string,
    rowId3?: string,
    gridApi: GridApi | undefined,
    onRowSelected?: any
    numberOfProps?: number,
    hasMultipleProps?: boolean
}

const AGGridComponent = (props: AGGridProps) => {
    const theme: Theme = useTheme();
    const gridTheme: string = useAgGridThemeHook();
    const [rowStyle,] = useState<any>({
        backgroundColor: theme.backgroundColor,
        color: theme.textColor
    })
    useAgGridResizeHook(props.gridApi);
    /**
     * Sets row id to each row in the ag grid
     * @param params
     */
    const getRowId = useCallback((params: GetRowIdParams) => {
        if (props.hasMultipleProps) {
            if (props.rowId1 && props.rowId2 && props.rowId3) {
                return params.data[props.rowId] + params.data[props.rowId1] + params.data[props.rowId2] + params.data[props.rowId3];
            } else {
                return props.rowId1 && props.rowId2 ? params.data[props.rowId] + params.data[props.rowId1] + params.data[props.rowId2] : params.data[props.rowId];
            }
        } else {
            return params.data[props.rowId]
        }
    }, [props]);


    /**
     * Sets colum to fit on start
     * @param params
     */
    const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
        params.api.sizeColumnsToFit();
    }, []);

    return <div className={clsx(gridTheme)} style={{height: '20em'}}>
        <AgGridReact
            rowStyle={{rowStyle}}
            onFirstDataRendered={onFirstDataRendered}
            rowData={props.items}
            rowHeight={20}
            pagination={true}
            paginationPageSize={20}
            cellFlashDelay={2000}
            columnDefs={props.getColumnDefs}
            getRowId={getRowId}
            ensureDomOrder={true}
            rowSelection={'single'}
            onSelectionChanged={props.onRowSelected}
            onGridReady={props.onGridReady}
            animateRows={true}
            defaultColDef={DefaultColumnDef}
            sideBar={DefaultSideBarDef}
            statusBar={DefaultStatusPanelDef}
        >
        </AgGridReact>
    </div>;
};

export default AGGridComponent;
