import {useCallback, useMemo, useState} from "react";
import {ColDef, ColGroupDef, GridApi, GridReadyEvent} from "ag-grid-community";
import AGGridComponent from "../shared/AGGridComponent";
import {v4 as uuidv4} from 'uuid';

interface TestAPIUserDetailsProps {
    items: any
}

const TestAPIUserRoles = ({items}: TestAPIUserDetailsProps) => {
    const [gridApi, setGridApi] = useState<GridApi>();

    const getId = () => {
        let id = uuidv4()
        return id
    }

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

    return <AGGridComponent gridApi={gridApi} items={items} onGridReady={onGridReady} getColumnDefs={getUserColumnDefs}
                            rowId={getId()}/>
}

export default TestAPIUserRoles;
