import {useEffect} from "react";
import {handleDrawerChange} from "../store/appReducer";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";

const useWindowFocus = (ref: any) => {
    const dispatch = useAppDispatch();
    const {
        drawerOpen,
    } = useSelector((state: RootState) => state.app);

    useEffect(() => {
        if (!ref?.current) return
        const element = ref.current

        const handleWindowResize = (ev: any) => {
            if (ev.type === 'click' && drawerOpen) {
                dispatch(handleDrawerChange(!drawerOpen))
            }
        }

        element.addEventListener('click', handleWindowResize);

        return () => {
            element.removeEventListener('click', handleWindowResize);
        };
    }, [drawerOpen, dispatch, ref]);

    return null
}

export default useWindowFocus
