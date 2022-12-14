import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import LoaderPage from '../pages/LoaderPage';
import useToken from "../hooks/useToken";
import {ForbiddenPage} from "../pages/errors";

const TestAPIPage = React.lazy(() => import('../pages/TestAPIPage'));
const DashboardPage = React.lazy(() => import('../pages/DashboardPage'));
const VideosPage = React.lazy(() => import('../pages/VideosPage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage'));

export const RoutesSwitch = () => {
    const token = useToken()

    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                <Route id={'/'} path={'/'} element={<DashboardPage/>}/>
                <Route id={'/videos'} path={'/videos'} element={<VideosPage/>}/>
                <Route id={'/about'} path={'/about'} element={<AboutPage/>}/>
                {<Route id={'/testAPI'} path={'/testAPI'} element={token ? <TestAPIPage/> : <ForbiddenPage/>}/>}
            </Routes>
        </Suspense>
    );
};

