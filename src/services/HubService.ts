import {HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel} from "@microsoft/signalr";

const {REACT_APP_STAGE} = process.env;

export abstract class HubService {
    protected constructor(user: any) {
        this.registerUser(user).then(r => console.log('user registered'));
    }

    abstract get endPoint(): string;

    public get isConnected(): boolean {
        return this.state === HubConnectionState.Connected;
    }

    public get isDisconnected(): boolean {
        return this.state === HubConnectionState.Disconnected;
    }

    public get isDevelopment(): boolean {
        return REACT_APP_STAGE === 'development' || REACT_APP_STAGE === 'staging';
    }

    public get state(): HubConnectionState {
        return this.hubConnection?.state ?? HubConnectionState.Disconnected;
    }

    private _accessToken: string;

    protected get accessToken(): string | null {
        return this._accessToken;
    }

    private _hubConnection: HubConnection;

    protected get hubConnection(): HubConnection {
        return this.ensureConnection();
    }

    protected get retryDelays(): number[] {
        return [0, 3000, 5000, 10000, 15000, 30000, 60000, 90000];
    }

    public async registerUser(user: any): Promise<void> {
        this._accessToken = user?.accessToken ?? null;
    }

    public abstract start(): Promise<HubConnectionState>;

    public async stop(): Promise<HubConnectionState> {
        if (this.isConnected) {
            try {
                await this.beforeStop();
                await this.hubConnection.stop();
            } catch (error) {
                await this.hubConnection.stop();
            } finally {
                this._hubConnection = undefined;
            }
        }
        return this.state;
    }

    protected abstract beforeStop(): Promise<void>;

    protected async restart(): Promise<HubConnectionState> {
        await this.stop();
        return this.start();
    }

    private ensureConnection(): HubConnection {
        if (!this._hubConnection) {
            this._hubConnection = new HubConnectionBuilder()
                .withUrl(this.endPoint, {
                    accessTokenFactory: () => this.accessToken
                })
                .withAutomaticReconnect(this.retryDelays)
                .configureLogging(LogLevel.Error)
                .build();
        }
        return this._hubConnection;
    }
}
