import {Grid, TextField} from "@mui/material";
import * as React from "react";
import {UserRegisterModel} from "../about/RegisterForm";
import {validateEmail} from "../../helpers/helpers";
import {useEffect, useState} from "react";
import {useTheme} from "@mui/material/styles";
import {UserLoginModel} from "../about/LoginForm";

interface Props {
    user: UserRegisterModel | UserLoginModel,
    setUser: any,
    type: string
}

const UserInfoGrid = ({user, setUser, type}: Props) => {
    const [userInfo, setUserInfo] = useState<UserRegisterModel>({
        name: "",
        password: "",
        email: "",
    })
    const [validEmail, setValidEmail] = useState<boolean>(false)
    const theme = useTheme()

    useEffect(() => {
        if(!userInfo) return
        setUser(userInfo)
    }, [userInfo, setUser])

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

    return <Grid container spacing={1} className={'Center'} sx={{flexDirection: 'column', display: 'contents'}}>
        {type === 'register' && <Grid item xs={12}>
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
        </Grid>}
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
}

export default UserInfoGrid
