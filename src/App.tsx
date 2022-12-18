import React, {useEffect, useState} from 'react';
import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import {useSelector} from 'react-redux';
import {RootState} from './store/rootReducer';
import {darkTheme, lightTheme} from './theme/theme';
import MainPage from './pages/MainPage';
import {useAppDispatch} from "./store/store";
import {fetchGithubUserProfile, setupApp} from "./store/thunks/appThunk";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase/firebase";
import {setFirebaseError, setFirebaseLoading, setFirebaseUser} from "./store/authReducer";
import {sendFirebaseEmailVerification} from "./store/thunks/authThunk";
import "react-image-gallery/styles/css/image-gallery.css";
import {ChatService} from "./services/SignalR/ChatService";
import {addToMessageList, setOnlineUsersToStore} from "./store/chatReducer";

function App() {
    const {githubProfile, isDarkTheme} = useSelector((state: RootState) => state.app);
    const dispatch = useAppDispatch();
    const [user, loading, error] = useAuthState(auth);
    const [localTheme, setLocalTheme] = useState(lightTheme)
    const [incoming, setIncoming] = useState<any>({user: null, message: null})
    const [onlineUsers, setOnlineUsers] = useState<any>([])
    const [service,] = useState<ChatService | null>(null)

    useEffect(() => {
        const dispatchSetupApp = async () => {
            const token = await user.getIdToken()
            dispatch(setupApp(token))
        }

        if (user) {
            dispatchSetupApp().then(() => console.log('App setup started.'))
        } else {
            console.log('Log in to access custom api test methods.')
        }
    }, [user, dispatch])

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
        if (githubProfile) return
        dispatch(fetchGithubUserProfile());
    }, [dispatch, githubProfile]);


    useEffect(() => {
        const createService = async (service: any) => {
            await service.registerUser(user)
            await service.start(setIncoming, setOnlineUsers).then((service) => {
                console.log(service)
                return service
            })
        }

        if (user && !service) {
            const service = ChatService.getInstance(user);
            createService(service).then(createdService => console.log(createdService))
        }
    }, [user, service])

    useEffect(() => {
        if (incoming?.message) {
            dispatch(addToMessageList(incoming))
        }
        // eslint-disable-next-line
    }, [incoming])

    useEffect(() => {
        if (onlineUsers?.length > 0) {
            dispatch(setOnlineUsersToStore(onlineUsers))
        }
        // eslint-disable-next-line
    }, [onlineUsers])

    return (
        <ThemeProvider theme={localTheme}>
            <MainPage/>
        </ThemeProvider>
    );
}

export default App;

