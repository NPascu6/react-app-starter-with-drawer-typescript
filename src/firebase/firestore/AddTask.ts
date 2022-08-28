import {auth, db} from '../firebase'
import {addDoc, collection, getDocs, query, Timestamp, where} from 'firebase/firestore'
import {UserInfo} from "../../pages/AboutPage";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


//Actions
//---------------------------------------------------------------------------------------------------

export const handleSubmit = async (e: any, value: UserInfo) => {
    e.preventDefault()
    try {
        debugger
        let res = await addDoc(collection(db, 'users'), {
            title: value.title,
            comments: value.comments,
            email: value.email,
            friends: value.friends,
            completed: value.completed,
            created: Timestamp.now()
        })
        debugger
        console.log(res)
    } catch (err) {
        alert(err)
    }
}

//---------------------------------------------------------------------------------------------------

export const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

//---------------------------------------------------------------------------------------------------

export const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password);
        return res
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

//---------------------------------------------------------------------------------------------------

export const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

//---------------------------------------------------------------------------------------------------

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

//---------------------------------------------------------------------------------------------------

export const logout = async () => {
    await signOut(auth);
};

//---------------------------------------------------------------------------------------------------


