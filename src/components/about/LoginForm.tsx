import {Button, Grid, Paper, TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {loginWithFirebase} from "../../store/thunks/authThunk";
import {useAppDispatch} from "../../store/store";


export interface UserLoginModel {
    password: string,
    email: string,
}

const CommentsForm = () => {
    const theme = useTheme()
    const [userInfo, setUserInfo] = useState<UserLoginModel>({
        password: "",
        email: "",
    })
    const dispatch = useAppDispatch()

    const handleChangeUserInfo = (val: string, type: string) => {
        switch (type) {
            case 'password' : {
                setUserInfo(prevState => ({
                    ...prevState,
                    password: val
                }));
                break;
            }
            case 'email': {
                setUserInfo(prevState => ({
                    ...prevState,
                    email: val
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
                      padding: '0.5em'
                  }}
                  className={'Center'}>
        <Grid container spacing={2} className={'Center'} sx={{flexDirection: 'column'}}>
            <Grid item>
                <TextField label={'Password'}
                           sx={{
                               '& .MuiFormLabel-root': {
                                   color: theme.textColor
                               },
                               '& .MuiInputBase-root': {
                                   color: theme.textColor
                               }
                           }}
                           type={"password"}
                           value={userInfo.password}
                           size={"small"}
                           onChange={(v) => handleChangeUserInfo(v.target.value, 'password')}/>
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
        </Grid>
        <Button onClick={async (e) => {
            dispatch(loginWithFirebase(userInfo))
            //await registerWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
            setUserInfo({
                password: "",
                email: "",
            })
        }
        }>Login</Button>
    </Paper>
}

export default CommentsForm
