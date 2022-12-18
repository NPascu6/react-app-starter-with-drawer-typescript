import {useCallback, useEffect, useState} from 'react';
import {ChatService} from "../services/SignalR/ChatService";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../services/firebase/firebase";
import {addToMessageList, setOnlineUsersToStore} from "../store/chatReducer";
import {useAppDispatch} from "../store/store";

/**
 * Hook for getting setting the right theme
 * @return string
 */
const useCreateChatConnectionHook = () => {
    const [service,]= useState<ChatService | null>(null)
    const [user] = useAuthState(auth);
    const [incoming, setIncoming] = useState<any>({user: null, message: null})
    const [onlineUsers, setOnlineUsers] = useState<any>([])
    const dispatch = useAppDispatch();

    const setMessageCallback = useCallback(() => {
        if (incoming?.message) {
            dispatch(addToMessageList(incoming))
        }
    }, [incoming, dispatch])
    setMessageCallback()

    const setOnlineUsersCallback = useCallback(() => {
        if (onlineUsers?.length > 0) {
            dispatch(setOnlineUsersToStore(onlineUsers))
        }

    }, [onlineUsers, dispatch])
    setOnlineUsersCallback()

    useEffect(() => {
        const createService = async (service: any) => {
            await service.registerUser(user)
            await service.start(setIncoming, setOnlineUsers).then((service) => {
                console.log(service)
                return service
            })
        }

        if (user && !service) {
            const service = ChatService.getInstance(user);
            createService(service).then(createdService => console.log(createdService))
        }
    }, [user, service])


    return service;
};

export default useCreateChatConnectionHook;
