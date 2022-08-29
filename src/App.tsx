import React, {useEffect, useState} from 'react';
import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import {useSelector} from 'react-redux';
import {RootState} from './store/rootReducer';
import {darkTheme, lightTheme, pinkDarkTheme, pinkLightTheme} from './theme/theme';
import MainPage from './pages/MainPage';
import {useAppDispatch} from "./store/store";
import {fetchGithubProfile, fetchGithubUserProfile} from "./store/thunks/appThunk";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase/firebase";
import {setFirebaseError, setFirebaseLoading, setFirebaseUser} from "./store/authReducer";
import {sendFirebaseEmailVerification} from "./store/thunks/authThunk";
import LoaderPage from "./pages/LoaderPage";

function App() {
    const {githubProfiles, githubProfile, theme} = useSelector((state: RootState) => state.app);
    const dispatch = useAppDispatch();
    const [user, loading, error] = useAuthState(auth);
    const [localTheme, setLocalTheme] = useState(lightTheme)
debugger
    useEffect(() => {
        switch (theme) {
            case 'lightTheme':
                setLocalTheme(lightTheme)
                break
            case 'darkTheme':
                setLocalTheme(darkTheme)
                break
            case 'pinkLightTheme':
                setLocalTheme(pinkLightTheme)
                break
            case 'pinkDarkTheme':
                setLocalTheme(pinkDarkTheme)
                break
            default:
                return
        }
    }, [theme])

    useEffect(() => {
        if (user?.emailVerified || !user) return
        dispatch(sendFirebaseEmailVerification())
    }, [user, dispatch])

    useEffect(() => {
        if (!user) return
        dispatch(setFirebaseUser(user.email))
        if (!loading) return
        dispatch(setFirebaseLoading(loading))
        if (!error) return
        dispatch(setFirebaseError(error))
    }, [user, loading, error, dispatch])

    useEffect(() => {
        if (githubProfiles.length !== 0) return
        dispatch(fetchGithubProfile());
    }, [dispatch, githubProfiles]);

    useEffect(() => {
        if (githubProfile) return
        dispatch(fetchGithubUserProfile());
    }, [dispatch, githubProfile]);

    return (
        theme !== "" ?
            <>
                <ThemeProvider theme={localTheme}>
                    <MainPage/>
                </ThemeProvider>
            </>
            : <LoaderPage/>
    );
}

export default App;

