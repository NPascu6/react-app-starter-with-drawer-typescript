import {Dispatch, SetStateAction} from 'react';
import {HubConnectionState} from "@microsoft/signalr";
import {HubService} from "../HubService";

const {REACT_APP_STAGE} = process.env;

export class ChatService extends HubService {
    private _methodNames = {
        SendMessage: 'SendMessage',
        UnsubscribeAll: 'Unsubscribe',
        ReceiveMessage: 'ReceiveMessage',
        OnlineUsers: 'OnlineUsers',
        Error: 'error'
    };
    private url: string = `https://aspcorebasicnet6api20221214201717.azurewebsites.net/chatHub`;
    //private url: string = `https://localhost:7282/chatHub`;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(user: any) {
        super(user);
    }

    public get endPoint(): string {
        return this.url
    }

    protected async beforeStop(): Promise<void> {
        await this.unsubscribe();
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
        await this.hubConnection.invoke(this._methodNames.SendMessage, user, message);
    }

    private configureListeners(setMessage?: Dispatch<SetStateAction<any | undefined>> | null, setOnlineUsers?: Dispatch<SetStateAction<any | undefined>> | null,) {
        this.hubConnection.on(this._methodNames.ReceiveMessage, (message: string, user: any) => {
            setMessage({
                message,
                user
            })
        });

        this.hubConnection.on(this._methodNames.OnlineUsers, (message) => {
            debugger
            setOnlineUsers(message)
        });
    }
}
