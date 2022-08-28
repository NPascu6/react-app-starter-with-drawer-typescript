import {logInWithEmailAndPassword, registerWithEmailAndPassword} from "../../firebase/firestore/AddTask";
import {UserRegisterModel} from "../../components/about/RegisterForm";
import {UserLoginModel} from "../../components/about/LoginForm";

export const registerWithFirebase = (userInfo: UserRegisterModel) => async (dispatch: any) => {
    console.log('Fetching github user profile');
    const res = await registerWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
    console.log(res)
};

export const loginWithFirebase = (userInfo: UserLoginModel) => async (dispatch: any) => {
    console.log('Fetching github user profile');
    const res = await logInWithEmailAndPassword(userInfo.email, userInfo.password)
    console.log(res)
};
