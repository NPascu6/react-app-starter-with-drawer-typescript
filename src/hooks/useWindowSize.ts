import {useEffect, useState} from "react";

export interface WindowInterface {
    innerWidth: number,
    innerHeight: number
}

const useWindowSize = (): WindowInterface => {
    const [windowSize, setWindowSize] = useState<WindowInterface>(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return windowSize
}

export default useWindowSize
