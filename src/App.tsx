import React, {useEffect} from 'react';
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

function App() {
    const {isDarkTheme, githubProfiles, githubProfile} = useSelector((state: RootState) => state.app);
    const dispatch = useAppDispatch();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if(githubProfiles.length !== 0) return
        dispatch(fetchGithubProfile());
    }, [dispatch, githubProfiles]);

    useEffect(() => {
        if(githubProfile) return
        dispatch(fetchGithubUserProfile());
    }, [dispatch, githubProfile]);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <MainPage/>
        </ThemeProvider>
    );
}

export default App;

