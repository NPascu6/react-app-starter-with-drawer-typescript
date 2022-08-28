import {Button, Checkbox, Grid, Paper, TextField} from "@mui/material";
import {handleSubmit} from "../../firebase/firestore/AddTask";
import * as React from "react";
import {useEffect, useState} from "react";
import {useTheme} from "@mui/material/styles";

interface UserInfoFriend {
    name: string,
    email: string
}

export interface UserInfo {
    title: string,
    comments: string,
    email: string,
    completed: boolean,
    friends: UserInfoFriend[]
}

const CommentsForm = () => {
    const theme = useTheme()
    const [userInfo, setUserInfo] = useState<UserInfo>({
        title: "",
        comments: "",
        email: "",
        completed: false,
        friends: []
    })

    const [userFriend, setUserFriend] = useState<UserInfoFriend>({
        name: "",
        email: ""
    })

    useEffect(() => {
        if (userFriend.email !== "") {
            let filtered = userInfo.friends.filter(f => f.email === userFriend.email && f.name === userFriend.name)
            if (filtered) {
                let arr = userInfo.friends.filter(f => f.email !== userFriend.email && f.name !== userFriend.name)
                arr.push(userFriend)
                userInfo.friends = arr
            } else {
                userInfo.friends.push(userFriend)
            }
        }
    }, [userFriend, userInfo])

    const handleChangeUserInfo = (val: string, type: string) => {
        switch (type) {
            case 'title' : {
                setUserInfo(prevState => ({
                    ...prevState,
                    title: val
                }));
                break;
            }
            case 'email' : {
                setUserInfo(prevState => ({
                    ...prevState,
                    email: val
                }));
                break;
            }
            case 'comments': {
                setUserInfo(prevState => ({
                    ...prevState,
                    comments: val
                }));
                break;
            }
            case 'completed': {
                setUserInfo(prevState => ({
                    ...prevState,
                    completed: !(prevState.completed && val === 'on')
                }));
                break;
            }
            case 'friends-email': {
                setUserFriend(prevState => ({
                    ...prevState,
                    email: val
                }));
                break;
            }
            case 'friends-name': {
                setUserFriend(prevState => ({
                    ...prevState,
                    name: val
                }));
                break;
            }
        }
    }


    return <Paper elevation={4}
                  sx={{
                      flex: 1,
                      backgroundColor: theme.backgroundColor,
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid',
                      margin: '1em',
                      padding: '0.5em',
                      color: theme.textColor
                  }}
                  className={'Center'}>
        <Grid container spacing={2} className={'Center'} sx={{flexDirection: 'column'}}>
            <Grid item>
                <TextField label={'Title'}
                           sx={{
                               '& .MuiFormLabel-root': {
                                   color: theme.textColor
                               },
                               '& .MuiInputBase-root': {
                                   color: theme.textColor
                               }
                           }}
                           type={"text"}
                           value={userInfo.title}
                           multiline={true}
                           size={"small"}
                           onChange={(v) => handleChangeUserInfo(v.target.value, 'title')}/>
            </Grid>
            <Grid item>
                <TextField label={'Comments'}
                           sx={{
                               '& .MuiFormLabel-root': {
                                   color: theme.textColor
                               },
                               '& .MuiInputBase-root': {
                                   color: theme.textColor
                               }
                           }}
                           multiline={true}
                           value={userInfo.comments}
                           size={"small"}
                           onChange={(v) => handleChangeUserInfo(v.target.value, 'comments')}/>
            </Grid>
            <Grid item>
                <TextField label={'Email to be reached at'}
                           sx={{
                               '& .MuiFormLabel-root': {
                                   color: theme.textColor
                               },
                               '& .MuiInputBase-root': {
                                   color: theme.textColor
                               }
                           }}
                           type={"email"}
                           value={userInfo.email}
                           size={"small"}
                           onChange={(v) => handleChangeUserInfo(v.target.value, 'email')}/>
            </Grid>
            <Grid item>
                <Checkbox
                    checked={userInfo.completed}
                    onChange={(v) => handleChangeUserInfo(v.target.value, 'completed')}
                    inputProps={{'aria-label': 'controlled'}}
                />
            </Grid>
        </Grid>
        <Button onClick={async (e) => {

            await handleSubmit(e, userInfo)
            setUserInfo({
                title: "",
                comments: "",
                email: "",
                completed: false,
                friends: []
            })
        }
        }>Send</Button>
    </Paper>
}

export default CommentsForm
