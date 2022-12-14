import {useEffect, useState} from "react";
import {auth} from "../firebase/firebase";

export default function useToken() {
    const [token, setToken] = useState('')

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                user.getIdToken(true)
                    .then(latestToken => setToken(latestToken))
                    .catch(err => console.log(err))
            }
        })
    }, [])

    return token
}
