import {HubConnectionState} from "@microsoft/signalr";
import {HubService} from "../HubService";
import {AppDispatch} from "../../store/store";
import {addToMessageList, removeLastMessageFromMessageList, setOnlineUsersToStore} from "../../store/chatReducer";

const {REACT_APP_API_URI_NPASCU} = process.env;

export class ChatService extends HubService {
    private static instance: ChatService;
    private static _user;

    private _methodNames = {
        SendMessage: 'SendMessage',
        UnsubscribeAll: 'Unsubscribe',
        ReceiveMessage: 'ReceiveMessage',
        OnlineUsers: 'OnlineUsers',
        Error: 'error'
    };

    private _url: string = `${REACT_APP_API_URI_NPASCU}/chatHub`;

    constructor(user: any) {
        super(user);
        ChatService._user = user
    }

    public get endPoint(): string {
        return this._url
    }

    //Get the instance for whole app
    public static getInstance(user): ChatService {
        if (!ChatService.instance) {
            this._user = user
            ChatService.instance = new ChatService(this._user);
        }
        return ChatService.instance;
    }

    public async start(dispatch?: AppDispatch): Promise<HubConnectionState> {
        try {
            await this.stop();

            this.hubConnection.onreconnected(async (connectionId?: string) => {
                console.log('Connection Id', connectionId);
                this.configureListeners(dispatch);
            });

            this.configureListeners(dispatch);

            if (this.isDisconnected)
                await this.hubConnection.start();
        } catch (err) {
            console.log(err);
        }

        return this.state;
    }

    public async unsubscribe(): Promise<void | string> {
        try {
            await this.hubConnection.invoke(this._methodNames.UnsubscribeAll);
        } catch (err) {
            return err.message
        }
    }

    public async sendMessage(message: string, user: any): Promise<void> {
        try {
            await this.hubConnection.invoke(this._methodNames.SendMessage, message, user);
        } catch (err) {
            return err.message
        }
    }

    protected async beforeStop(): Promise<void> {
        try {
            await this.unsubscribe();

        } catch (err) {
            return err.message
        }
    }

    private configureListeners(dispatch: AppDispatch) {
        this.hubConnection.on(this._methodNames.ReceiveMessage, (message: string, user: any) => {
            if (message.includes('connected to the chat.') || message.includes('disconnected from the chat.')) {
                setTimeout(() => {
                    dispatch(removeLastMessageFromMessageList())
                }, 1000)
            }

            dispatch(addToMessageList({
                message,
                user
            }))
        });

        this.hubConnection.on(this._methodNames.OnlineUsers, (message) => {
            dispatch(setOnlineUsersToStore(message))
        });
    }

}
