import {useEffect, useMemo, useState} from 'react';
import {GridApi} from 'ag-grid-community';

/**
 * Hook for handling resizing of ag-grid
 * @param gridApi
 */
const useAgGridResizeHook = (gridApi: GridApi | undefined) => {
    const [data, setData] = useState<any>([]);
    const memoApi: GridApi = useMemo(() => data, [data]);

    useEffect(() => {
        if (gridApi) {
            setData(gridApi);
        }
    }, [gridApi]);

    useEffect(() => {
        const handleResize = () => {
            if (memoApi) {
                memoApi?.sizeColumnsToFit();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [memoApi]);
};

export default useAgGridResizeHook;
