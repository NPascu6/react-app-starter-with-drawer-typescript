import {Button, Grid, Paper, TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {loginWithFirebase} from "../../store/thunks/authThunk";
import {useAppDispatch} from "../../store/store";
import {validateEmail} from "../../helpers/helpers";


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
    const [validEmail, setValidEmail] = useState<boolean>(false)

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
                let valid = validateEmail(userInfo)
                valid ? setValidEmail(true) : setValidEmail(false)

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
                      backgroundColor: theme.backgroundColor,

                      border: '1px solid',
                      padding: '0.2em',
                      height: '15em',
                      borderRadius: 0,
                  }}
                  className={'Center'}>
        <Grid container spacing={1} className={'Center'} sx={{flexDirection: 'column',        display: 'contents',}}>
            <Grid item>
                <TextField label={'Email'}
                           error={!validEmail && userInfo.email !== ""}
                           sx={{
                               width: '14em',
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
                <TextField label={'Password'}
                           sx={{
                               width: '14em',
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
        </Grid>
        <Button
            disabled={!userInfo.password || !userInfo.email}
            sx={{border: '1px solid',
                borderRadius: 0,
                padding: '0.2em',
                margin: '0.5em'}} onClick={async (e) => {
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
