import {useCallback, useMemo, useState} from "react";
import {ColDef, ColGroupDef, GridApi, GridReadyEvent} from "ag-grid-community";
import AGGridComponent from "../shared/AGGridComponent";
import GridToolbar from "./GridToolbar";
import LoaderPage from "../../pages/LoaderPage";
import {ForbiddenPage} from "../../pages/errors";

interface TestAPIUserDetailsProps {
    items: any
}

const TestAPIUserRoles = ({items}: TestAPIUserDetailsProps) => {
    const [gridApi, setGridApi] = useState<GridApi>();

    const getUserColumnDefs = useMemo((): (ColDef | ColGroupDef)[] => {
        return [
            {
                headerName: 'Role Name',
                field: 'roleName',
                minWidth: 80,
                editable: true,
                sortable: true,
            }
        ];
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        setGridApi(params.api);
    }, []);

    return items?.length > 0 ? typeof (items[0]) === 'string' ? <ForbiddenPage/> :<>
        <GridToolbar gridApi={gridApi}/>
        <AGGridComponent gridApi={gridApi} items={items} onGridReady={onGridReady} getColumnDefs={getUserColumnDefs}
                         rowId={'userRoleId'}/>
    </> : <LoaderPage/>
}

export default TestAPIUserRoles;
