import {Dispatch, SetStateAction} from 'react';
import {HubConnectionState} from "@microsoft/signalr";
import {HubService} from "../HubService";

const {REACT_APP_STAGE} = process.env;

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

    private _url: string = `https://aspcorebasicnet6api20221214201717.azurewebsites.net/chatHub`;
    //private _url: string = `https://localhost:7282/chatHub`;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(user: any) {
        super(user);
        ChatService._user = user
    }

    public get endPoint(): string {
        return this._url
    }

    public static getInstance(user): ChatService {
        if (!ChatService.instance) {
            this._user = user
            ChatService.instance = new ChatService(this._user);
        }
        return ChatService.instance;
    }

    public async start(setMessage?: Dispatch<SetStateAction<any | undefined>> | null,
                       setOnlineUsers?: Dispatch<SetStateAction<any | undefined>> | null): Promise<HubConnectionState> {
        try {
            await this.stop();

            this.hubConnection.onreconnected(async (connectionId?: string) => {
                if (REACT_APP_STAGE === 'development') {
                    console.log('Connection Id', connectionId);
                }
                this.configureListeners(setMessage, setOnlineUsers);
            });

            this.configureListeners(setMessage, setOnlineUsers);

            if (this.isDisconnected)
                await this.hubConnection.start();
        } catch (err) {
            console.log(err);
        }

        return this.state;
    }

    public async unsubscribe(): Promise<void> {
        await this.hubConnection.invoke(this._methodNames.UnsubscribeAll);
    }

    public async sendMessage(message: string, user: any): Promise<void> {
        await this.hubConnection.invoke(this._methodNames.SendMessage, message, user);
    }

    protected async beforeStop(): Promise<void> {
        await this.unsubscribe();
    }

    private configureListeners(setMessage?: Dispatch<SetStateAction<any | undefined>> | null, setOnlineUsers?: Dispatch<SetStateAction<any | undefined>> | null,) {
        this.hubConnection.on(this._methodNames.ReceiveMessage, (message: string, user: any) => {
            setMessage({
                message,
                user
            })
        });

        this.hubConnection.on(this._methodNames.OnlineUsers, (message) => {
            setOnlineUsers(message)
        });
    }
}
