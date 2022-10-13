import {Button, Paper} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {loginWithFirebase} from "../../store/thunks/authThunk";
import {useAppDispatch} from "../../store/store";
import UserInfoGrid from "../shared/UserInfoGrid";

export interface UserLoginModel {
    password: string,
    email: string,
}

const LoginForm = () => {
    const theme = useTheme()
    const [user, setUser] = useState<UserLoginModel>({
        password: "",
        email: "",
    })
    const dispatch = useAppDispatch()

    return <Paper elevation={4}
                  sx={{
                      backgroundColor: theme.backgroundColor,

                      border: '1px solid',
                      padding: '0.2em',
                      height: '15em',
                      borderRadius: 0,
                  }}
                  className={'Center'}>
        <UserInfoGrid type={'login'} user={user} setUser={setUser}/>
        <Button
            disabled={!user.password || !user.email}
            sx={{
                border: '1px solid',
                borderRadius: 0,
                padding: '0.2em',
                margin: '0.5em'
            }} onClick={async (e) => {
            dispatch(loginWithFirebase(user))
            //await registerWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
        }
        }>Login</Button>
    </Paper>
}

export default LoginForm
