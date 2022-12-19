import {useEffect, useState} from 'react';
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
    const [service, setService] = useState<ChatService | null>(null)
    const [user] = useAuthState(auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const createService = async (service: any) => {
            setService(service)

            await service.registerUser(user)
            await service.start(dispatch, addToMessageList, setOnlineUsersToStore).then((service) => {
                console.log(service)
                return service
            })
        }

        if (user && !service) {
            const service = ChatService.getInstance(user);
            createService(service).then(createdService => console.log(createdService))
        }
    }, [user, service, dispatch])


    return service;
};

export default useCreateChatConnectionHook;
