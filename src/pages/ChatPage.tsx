import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Card, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";
import {MessageResponse} from "../store/chatReducer";
import LoaderPage from "./LoaderPage";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {ChatService} from "../services/SignalR/ChatService";
import {sendChatMessage} from "../store/thunks/chaThunk";
import {useAppDispatch} from "../store/store";
import {auth} from "../services/firebase/firebase";

const ChatPage = () => {
    const [message, setMessage] = useState<any>("")
    const [user] = useAuthState(auth);
    const theme = useTheme()
    const windowSize = useWindowSize()
    const {messageList, onlineUsers} = useSelector((state: RootState) => state.chat)
    const bottomRef = useRef(null);
    const dispatch = useAppDispatch();

    const sendMessage = (message: string) => {
        dispatch(sendChatMessage(message, user))
        setMessage("")
    }

    const getCharService = () => {
        const service = ChatService.getInstance(user);
        return service?.isConnected
    }

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }, [messageList]);

    return getCharService() === true ? <Grid container className={'Center'}>
        <Paper elevation={3} sx={{
            padding: '0.5em',
            backgroundColor: theme.textColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '30em',
            width: windowSize.innerWidth < 500 ? '20em' : '40em',
        }}>
            {onlineUsers?.map(u => u.isConnected &&
                <Typography sx={{color: theme.backgroundColor}} variant={"body2"}>{u?.email}</Typography>)}
            <Grid container>
                <Grid item xs={10}>
                    <TextField inputProps={{sx: {height: '0.5em', color: theme.backgroundColor}}} sx={{width: '100%'}}
                               size={"small"}
                               value={message}
                               multiline
                               onKeyPress={(e) => {
                                   if (e.key === "Enter") {
                                       debugger
                                       sendMessage(message)
                                   }
                               }}
                               onChange={(e) => setMessage(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={2}>
                    <Button sx={{
                        color: theme.backgroundColor,
                        border: '1px solid',
                        backgroundColor: theme.textColor
                    }}
                            onClick={() => sendMessage(message)}>
                        Send
                    </Button>
                </Grid>
            </Grid>
            <Divider/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                height: '20em',
                overflowWrap: "break-word",
                borderRadius: 10,
            }}>
                {messageList?.length > 0 && messageList.map((m: MessageResponse, index: number) => <Paper
                    key={index}
                    elevation={3}
                    sx={{
                        border: `1px solid ${theme.backgroundColor}`,
                        borderRadius: 1,
                        margin: '0.2em',
                        backgroundColor: theme.backgroundColor,
                        display: 'flex',
                        flexDirection: 'column',
                        width: windowSize.innerWidth < 500 ? '10em' : '20em',
                        alignSelf: auth.currentUser.email === m.user ? 'start' : 'end'
                    }}>
                    {m.message && <Typography
                        variant={"body1"}
                        sx={{
                            borderRadius: 2,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            padding: '0.5em',
                            backgroundColor: auth.currentUser.email === m.user ? theme.textColor : theme.backgroundColor,
                            color: auth.currentUser.email === m.user ? theme.backgroundColor : theme.textColor,
                        }}>{m.message}</Typography>}
                    {m.user && <Card sx={{
                        backgroundColor: auth.currentUser.email === m.user ? theme.textColor : theme.backgroundColor,
                        color: auth.currentUser.email === m.user ? theme.backgroundColor : theme.textColor,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        display: 'flex',
                        height: '1.5em',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        padding: 0
                    }} variant="outlined">
                        <Typography
                            sx={{
                                fontSize: 10
                            }}
                            variant={'body2'}>{m.user} </Typography>
                    </Card>}
                </Paper>)}
                <div ref={bottomRef}/>
            </div>
        </Paper>
    </Grid> : <LoaderPage/>
}

export default ChatPage;
