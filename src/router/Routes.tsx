import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import LoaderPage from '../pages/LoaderPage';
import DashboardPage from '../pages/DashboardPage';
import VideosPage from '../pages/VideosPage';
import AboutPage from "../pages/AboutPage";

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

