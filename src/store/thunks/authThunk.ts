import {logInWithEmailAndPassword, logout, registerWithEmailAndPassword} from "../../firebase/firestore/firestore";
import {UserRegisterModel} from "../../components/about/RegisterForm";
import {UserLoginModel} from "../../components/about/LoginForm";
import {setFirebaseUser} from "../authReducer";
import {getAuth, sendEmailVerification} from "firebase/auth";

export const registerWithFirebase = (userInfo: UserRegisterModel) => async (dispatch: any) => {
    console.log('Fetching github user profile');
    const res = await registerWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
    console.log(res)
};

export const loginWithFirebase = (userInfo: UserLoginModel) => async (dispatch: any) => {
    console.log('Fetching github user profile');
    const res = await logInWithEmailAndPassword(userInfo.email, userInfo.password)
    console.log(res)
    dispatch(setFirebaseUser(res.user.email))
};


export const logoutFirebase = () => async (dispatch: any) => {
    console.log('Fetching github user profile');
    const res = await logout()
    console.log(res)
    dispatch(setFirebaseUser(null))
};

export const sendFirebaseEmailVerification = () => async (dispatch: any) => {
    console.log('Fetching github user profile');
    const auth = getAuth();
    if (auth.currentUser) {
        let res = await sendEmailVerification(auth.currentUser)
        console.log(res)
    }
};
