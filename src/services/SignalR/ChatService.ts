import {Dispatch, SetStateAction} from 'react';
import {HubConnectionState} from "@microsoft/signalr";
import {HubService} from "../HubService";

const {REACT_APP_STAGE} = process.env;

export class ChatService extends HubService {
    private _methodNames = {
        SendMessage: 'SendMessage',
        UnsubscribeAll: 'UnsubscribeAll',
        ReceiveMessage: 'ReceiveMessage'
    };

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(user: any) {
        super(user);
    }

    public get endPoint(): string {
        return `https://localhost:7282/chatHub`;
    }

    public async start(setMessage?: Dispatch<SetStateAction<any | undefined>> | null,
                       setUserName?: Dispatch<SetStateAction<any | undefined>> | null): Promise<HubConnectionState> {
        try {
            await this.stop();

            this.hubConnection.onreconnected(async (connectionId?: string) => {
                if (REACT_APP_STAGE === 'development') {
                    console.log('Connection Id', connectionId);
                }
                this.configureListeners(setMessage, setUserName);
            });

            this.configureListeners(setMessage, setUserName);

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

    protected async beforeStop(): Promise<void> {
        await this.unsubscribe();
    }

    private configureListeners(setMessage?: Dispatch<SetStateAction<any | undefined>> | null, setUserName?: Dispatch<SetStateAction<any | undefined>> | null,) {
        this.hubConnection.on(this._methodNames.ReceiveMessage, (message: string, user: any) => {
            if (setMessage) {
                debugger
                setMessage(`${message}`);
            }

            if (setUserName) {
                setUserName(user)
            }
        });
    }
}