import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getGridTheme} from '../helpers/agGrid';
import {RootState} from "../store/rootReducer";

/**
 * Hook for getting setting the right theme
 * @return string
 */
const useAgGridThemeHook = () => {
    const {isDarkTheme} = useSelector((state: RootState) => state.app);
    const [gridTheme, setGridTheme] = useState(getGridTheme(isDarkTheme));

    useEffect(() => {
        let active = true;

        if (active) {
            setGridTheme(getGridTheme(isDarkTheme));
        }

        return () => {
            active = false;
        };
    }, [isDarkTheme]);

    return gridTheme;
};

export default useAgGridThemeHook;
