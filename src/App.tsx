import React, {useEffect, useState} from 'react';
import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import {useSelector} from 'react-redux';
import {RootState} from './store/rootReducer';
import {darkTheme, lightTheme} from './theme/theme';
import MainPage from './pages/MainPage';
import {useAppDispatch} from "./store/store";
import {fetchGithubProfile, fetchGithubUserProfile} from "./store/thunks/appThunk";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase/firebase";
import {setFirebaseError, setFirebaseLoading, setFirebaseUser} from "./store/authReducer";
import {sendFirebaseEmailVerification} from "./store/thunks/authThunk";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
    const {githubProfiles, githubProfile, isDarkTheme} = useSelector((state: RootState) => state.app);
    const dispatch = useAppDispatch();
    const [user, loading, error] = useAuthState(auth);
    const [localTheme, setLocalTheme] = useState(lightTheme)

    useEffect(() => {
        if (isDarkTheme) {
            setLocalTheme(darkTheme)
        } else {
            setLocalTheme(lightTheme)
        }
    }, [isDarkTheme])


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
        <ThemeProvider theme={localTheme}>
            <MainPage/>
        </ThemeProvider>
    );
}

export default App;

