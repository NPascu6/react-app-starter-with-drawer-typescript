import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import LoaderPage from '../pages/LoaderPage';
const DashboardPage =React.lazy(() => import('../pages/DashboardPage'));
const VideosPage =React.lazy(() => import('../pages/VideosPage'));
const AboutPage =React.lazy(() => import('../pages/AboutPage'));

export const RoutesSwitch = () => {
    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                <Route path={'/'} element={<DashboardPage/>}/>
                <Route path={'/videos'} element={<VideosPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    );
};

