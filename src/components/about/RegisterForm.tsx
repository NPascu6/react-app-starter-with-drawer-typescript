import {Button, Grid, Paper, TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {registerWithFirebase} from "../../store/thunks/authThunk";
import {useAppDispatch} from "../../store/store";
import {validateEmail} from "../../helpers/helpers";


export interface UserRegisterModel {
    name: string,
    password: string,
    email: string,
}

const CommentsForm = () => {
    const theme = useTheme()
    const [userInfo, setUserInfo] = useState<UserRegisterModel>({
        name: "",
        password: "",
        email: "",
    })
    const dispatch = useAppDispatch()
    const [validEmail, setValidEmail] = useState<boolean>(false)

    const handleChangeUserInfo = (val: string, type: string) => {
        switch (type) {
            case 'name' : {
                setUserInfo(prevState => ({
                    ...prevState,
                    name: val
                }));
                break;
            }
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
                      borderRadius: 0,
                      height: '15em'
                  }}
                  className={'Center'}>
        <Grid container spacing={1} className={'Center'} sx={{flexDirection: 'column',        display: 'contents'}}>
            <Grid item xs={12}>
                <TextField label={'Name'}
                           sx={{
                               width: '14em',
                               '& .MuiFormLabel-root': {
                                   color: theme.textColor
                               },
                               '& .MuiInputBase-root': {
                                   color: theme.textColor
                               }
                           }}
                           type={"text"}
                           value={userInfo.name}
                           multiline={true}
                           size={"small"}
                           onChange={(v) => handleChangeUserInfo(v.target.value, 'name')}/>
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
        </Grid>
        <Button
            sx={{border: '1px solid',
                borderRadius: 0,
                padding: '0.2em',
                margin: '0.5em'}}
            disabled={!userInfo.email || !userInfo.password || !userInfo.name} onClick={async (e) => {
            dispatch(registerWithFirebase(userInfo))
            //await registerWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
            setUserInfo({
                name: "",
                password: "",
                email: "",
            })
        }
        }>Register</Button>
    </Paper>
}

export default CommentsForm
