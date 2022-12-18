import {useCallback, useMemo, useState} from "react";
import {ColDef, ColGroupDef, GridApi, GridReadyEvent} from "ag-grid-community";
import AGGridComponent from "../shared/AGGridComponent";
import GridToolbar from "./GridToolbar";
import LoaderPage from "../../pages/LoaderPage";
import {ForbiddenPage} from "../../pages/errors";

interface TestAPIUserDetailsProps {
    items: any
}

const TestAPIWallets = ({items}: TestAPIUserDetailsProps) => {
    const [gridApi, setGridApi] = useState<GridApi>();

    const getUserColumnDefs = useMemo((): (ColDef | ColGroupDef)[] => {
        return [
            {
                headerName: 'walletId',
                field: 'walletId',
                minWidth: 80,
                editable: true,
                sortable: true,
                hide: true
            },
            {
                headerName: 'Wallet Name',
                field: 'walletName',
                minWidth: 80,
                editable: true,
                sortable: true,
            }
        ];
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        setGridApi(params.api);
    }, []);

    return items?.length > 0 ? typeof (items[0]) === 'string' ? <ForbiddenPage/> : <>
        <GridToolbar gridApi={gridApi}/>
        <AGGridComponent
            gridApi={gridApi}
            items={items}
            onGridReady={onGridReady}
            getColumnDefs={getUserColumnDefs}
            rowId={'walletId'}/>
    </> : <LoaderPage/>
}
export default TestAPIWallets;
