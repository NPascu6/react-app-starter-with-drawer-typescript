import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {logoutFirebase} from "../../store/thunks/authThunk";
import {useAppDispatch} from "../../store/store";
import LoginForm from "../about/LoginForm";
import {useTheme} from "@mui/material/styles";
import {Checkbox, Typography} from "@mui/material";
import RegisterForm from "../about/RegisterForm";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebase";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    firebaseUser: string
}

function SimpleDialog(props: SimpleDialogProps) {
    const {onClose, open} = props;
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const [formType, setFormType] = useState<string>('login')
    const [user] = useAuthState(auth);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            {props.firebaseUser && <DialogTitle>{props.firebaseUser}</DialogTitle>}
            <List sx={{backgroundColor: theme.backgroundColor, color: theme.textColor}}>
                {user && <ListItem sx={{color: user.emailVerified ? 'green' : 'red', pointerEvents: 'none'}}>
                    Email Verified: <Checkbox
                    checked={user.emailVerified}
                    inputProps={{'aria-label': 'controlled'}}/>
                </ListItem>}
                {(!props.firebaseUser && formType === 'login') && <ListItem autoFocus button onClick={() => handleClose()}>
                    <Typography variant={"h5"}>Don't have an account? Register here:</Typography>
                </ListItem>}
                {!props.firebaseUser && <ListItem autoFocus button
                                                  onClick={() => formType === 'login' ? setFormType('register') : setFormType('login')}>
                    {formType === 'login' ? "Register with firebase..." : "Back to login form..."}
                </ListItem>}
                {props.firebaseUser ? <ListItem button onClick={() => dispatch(logoutFirebase())}>
                    <Button sx={{      borderRadius: 0}}>Logout</Button>
                </ListItem> : formType === 'login' ? <LoginForm/> : <RegisterForm/>}
                <ListItem autoFocus button onClick={() => handleClose()}>
                    <Button sx={{      borderRadius: 0}}>Close</Button>
                </ListItem>
            </List>
        </Dialog>
    );
}

const AccountDialog = () => {
    const [open, setOpen] = React.useState(false);
    const {
        firebaseUser,
    } = useSelector((state: RootState) => state.auth);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AccountBoxIcon sx={{color: firebaseUser ? 'green' : 'red'}} onClick={handleClickOpen}/>
            <SimpleDialog
                firebaseUser={firebaseUser}
                open={open}
                onClose={handleClose}
            />
        </>
    );
}

export default AccountDialog
