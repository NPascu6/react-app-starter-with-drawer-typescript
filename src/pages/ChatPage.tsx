import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase/firebase";
import {ChatService} from "../services/SignalR/ChatService";
import {Button, Card, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import {useAppDispatch} from "../store/store";
import {addToMessageList, MessageResponse} from "../store/chatReducer";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import LoaderPage from "./LoaderPage";

const ChatPage = () => {
    const [service, setService] = useState<ChatService | null>(null)
    const [message, setMessage] = useState<any>("")
    const [user] = useAuthState(auth);
    const theme = useTheme()
    const windowSize = useWindowSize()
    const dispatch = useAppDispatch()
    const {messageList, isConnected} = useSelector((state: RootState) => state.chat)
    const [incoming, setIncoming] = useState<any>({user: null, message: null})
    const bottomRef = useRef(null);
    const [onlineUsers, setOnlineUsers] = useState<any>()

    const sendMessage = (message: string) => {
        service.sendMessage(user.email, message)
        setMessage("")
    }

    useEffect(() => {
        if (incoming?.message) {
            dispatch(addToMessageList(incoming))
        }
        // eslint-disable-next-line
    }, [incoming])

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }, [messageList]);

    useEffect(() => {
        if (user && !service) {
            const service = new ChatService(user);
            service.start(setIncoming, setOnlineUsers).then(() => {
                setService(service)
                console.log(service)
            })
        }

        return () => {
            service?.stop()
        }
    }, [user, service, dispatch, isConnected])

    return service?.isConnected === true ? <Grid container className={'Center'}>
        <Paper elevation={3} sx={{
            padding: '0.5em',
            backgroundColor: theme.textColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '30em',
            width: windowSize.innerWidth < 500 ? '20em' : '40em',
        }}>
            {onlineUsers?.map(u => u.isConnected && <Typography sx={{color: theme.backgroundColor}} variant={"body2"}>{u?.email}</Typography>)}
            <Grid container>
                <Grid item xs={10}>
                    <TextField inputProps={{sx: {height: '0.5em', color: theme.backgroundColor}}} sx={{width: '100%'}}
                               size={"small"}
                               value={message}
                               multiline
                               onChange={(e) => setMessage(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={2}>
                    <Button sx={{
                        color: theme.backgroundColor,
                        border: '1px solid',
                        backgroundColor: theme.textColor
                    }}
                            onClick={() => sendMessage(message)}>Send</Button>
                </Grid>
            </Grid>
            <Divider/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                height: '20em',
                overflowWrap: "break-word"
            }}>
                {messageList?.length > 0 && messageList.map((m: MessageResponse, index: number) => <Paper
                    key={index}
                    elevation={3}
                    sx={{
                        backgroundColor: theme.backgroundColor,
                        display: 'flex',
                        flexDirection: 'column',
                        width: windowSize.innerWidth < 500 ? '10em' : '20em',
                        alignSelf: auth.currentUser.email === m.user ? 'start' : 'end'
                    }}>
                    {m.message && <Typography
                        variant={"body1"}
                        sx={{
                            backgroundColor: auth.currentUser.email === m.user ? theme.textColor : theme.backgroundColor,
                            color: auth.currentUser.email === m.user ? theme.backgroundColor : theme.textColor,
                        }}>{m.message}</Typography>}
                    {m.user && <Card sx={{
                        backgroundColor: theme.backgroundColor,
                        display: 'flex',
                        height: '1.5em',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        padding: 0
                    }} variant="outlined">
                        <Typography
                            sx={{color: theme.textColor}}
                            variant={'body2'}>{m.user} </Typography>
                    </Card>}
                </Paper>)}
                <div ref={bottomRef}/>
            </div>
        </Paper>
    </Grid> : <LoaderPage/>
}

export default ChatPage;
