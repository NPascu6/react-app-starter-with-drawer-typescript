import {useCallback, useMemo, useState} from "react";
import {ColDef, ColGroupDef, GridApi, GridReadyEvent} from "ag-grid-community";
import AGGridComponent from "../shared/AGGridComponent";
import {v4 as uuidv4} from 'uuid';
import LoaderPage from "../../pages/LoaderPage";

interface TestAPIUserDetailsProps {
    items: any
}

const TestAPIUserDetails = ({items}: TestAPIUserDetailsProps) => {
    const [gridApi, setGridApi] = useState<GridApi>();

    const getId = () => {
        let id = uuidv4()
        debugger
        return id
    }

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
                headerName: 'Phone',
                field: 'phoneNumber',
                minWidth: 120,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Birth Date',
                field: 'birthDate',
                minWidth: 120,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Address',
                field: 'address',
                minWidth: 80,
                editable: true,
                sortable: true,
            }
        ];
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        setGridApi(params.api);
    }, []);

    return items?.length > 0 ?
        <AGGridComponent gridApi={gridApi} items={items} onGridReady={onGridReady} getColumnDefs={getUserColumnDefs}
                         rowId={getId()}/> : <LoaderPage/>
}
export default TestAPIUserDetails;
