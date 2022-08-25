import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import LoaderPage from '../pages/LoaderPage';
import DashboardPage from '../pages/DashboardPage';
import AboutPage from '../pages/AboutPage';

export const RoutesSwitch = () => {
    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                <Route path={'/'} element={<DashboardPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    );
};

