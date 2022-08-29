import {UserLoginModel} from "../components/about/LoginForm";
import {UserRegisterModel} from "../components/about/RegisterForm";

export const validateEmail = (userInfo: UserRegisterModel | UserLoginModel) => {
    debugger
    if (userInfo.email.includes('@') &&
        (userInfo.email.includes('.com') ||
            userInfo.email.includes('.ch') ||
            userInfo.email.includes('.net') ||
            userInfo.email.includes('.org') ||
            userInfo.email.includes('.ro'))
    ) {
        return true
    }
    return false
}
