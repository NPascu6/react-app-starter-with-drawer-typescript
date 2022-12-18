import {useCallback, useMemo, useState} from "react";
import {ColDef, ColGroupDef, GridApi, GridReadyEvent} from "ag-grid-community";
import AGGridComponent from "../shared/AGGridComponent";
import LoaderPage from "../../pages/LoaderPage";
import GridToolbar from "./GridToolbar";
import {ForbiddenPage} from "../../pages/errors";

interface TestAPIUserDetailsProps {
    items: any
}

const TestAPIUsers = ({items}: TestAPIUserDetailsProps) => {
    const [gridApi, setGridApi] = useState<GridApi>();

    const getUserColumnDefs = useMemo((): (ColDef | ColGroupDef)[] => {
        return [
            {
                headerName: 'UserId',
                field: 'userId',
                minWidth: 80,
                editable: true,
                sortable: true,
                hide: true
            },
            {
                headerName: 'ConnectionId',
                field: 'connectionId',
                minWidth: 80,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Connected',
                field: 'isConnected',
                minWidth: 80,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'User Name',
                field: 'userName',
                minWidth: 80,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Email',
                field: 'email',
                minWidth: 80,
                editable: true,
                sortable: true,
            }
        ];
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        setGridApi(params.api);
    }, []);

    return items?.length > 0 ? typeof (items[0]) === 'string' ? <ForbiddenPage/> :
            <>
                <GridToolbar gridApi={gridApi}/>
                <AGGridComponent gridApi={gridApi}
                                 items={items}
                                 onGridReady={onGridReady}
                                 getColumnDefs={getUserColumnDefs}
                                 rowId={'userId'}/>
            </>
        : <LoaderPage/>
}

export default TestAPIUsers
