import {ChatService} from "../../services/SignalR/ChatService";

export const sendChatMessage = (message: string, user: any) => async (dispatch: any) => {
    const service = ChatService.getInstance(user)
    await service.sendMessage(message, user.email)
};
