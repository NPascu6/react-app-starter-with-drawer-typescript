import {Button, Paper} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {registerWithFirebase} from "../../store/thunks/authThunk";
import {useAppDispatch} from "../../store/store";
import UserInfoGrid from "../shared/UserInfoGrid";


export interface UserRegisterModel {
    name: string,
    password: string,
    email: string,
}

const RegisterForm = () => {
    const theme = useTheme()
    const [user, setUser] = useState<UserRegisterModel>({
        name: "",
        password: "",
        email: "",
    })
    const dispatch = useAppDispatch()

    return <Paper elevation={4}
                  sx={{
                      backgroundColor: theme.backgroundColor,
                      border: '1px solid',
                      padding: '0.2em',
                      borderRadius: 0,
                      height: '15em'
                  }}
                  className={'Center'}>
        <UserInfoGrid
            type={'register'}
            user={user}
            setUser={setUser}
        />
        <Button
            sx={{
                border: '1px solid',
                borderRadius: 0,
                padding: '0.2em',
                margin: '0.5em'
            }}
            disabled={!user.email || !user.password || !user.name} onClick={async (e) => {
            dispatch(registerWithFirebase(user))
            //await registerWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
            setUser({
                name: "",
                password: "",
                email: "",
            })
        }
        }>Register</Button>
    </Paper>
}

export default RegisterForm
