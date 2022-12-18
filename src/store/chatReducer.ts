import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface MessageResponse {
    user: string,
    message: string,

}

interface ChatSliceState {
    messageResponse: MessageResponse;
    messageList: MessageResponse[];
    isConnected: boolean;
    onlineUsers: any[];
}

const initialState: ChatSliceState = {
    messageResponse: null,
    messageList: [],
    isConnected: false,
    onlineUsers: []
};

const ChatSlice = createSlice({
    name: 'ChatSlice',
    initialState: initialState,
    reducers: {
        setMessageResponse(state, action: PayloadAction<MessageResponse>) {
            state.messageResponse = action.payload;
            console.log('Set message:', action.payload)
        },
        addToMessageList(state, action: PayloadAction<MessageResponse>) {
            state.messageList.push(action.payload)
        },
        removeLastMessageFromMessageList(state) {
            state.messageList.pop()
        },
        setIsConnected(state, action: PayloadAction<boolean>) {
            state.isConnected = action.payload
        },
        setOnlineUsersToStore(state, action: PayloadAction<any>) {
            state.onlineUsers = action.payload
        },
    }
});

export const {
    setMessageResponse,
    addToMessageList,
    setIsConnected,
    setOnlineUsersToStore,
    removeLastMessageFromMessageList
} = ChatSlice.actions;

export default ChatSlice.reducer;
