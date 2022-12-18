import {RestService} from '../RestService';
import {User} from "./models";

const {REACT_APP_API_URI_NPASCU} = process.env;

export class NPascuAPIService extends RestService {
    private _baseUrl = REACT_APP_API_URI_NPASCU

    public async getAllTestUsers(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllUsers", {headers: {Authorization: "bearer " + token}}).then((res) => {
            if (typeof (res) === 'string') {
                return [res]
            } else
                return res.data;
        })
    }

    public async getAllTestUserDetails(token: any): Promise<User[] | string> {
        return this.fetchData(this._baseUrl + "/GetAllUserDetails", {headers: {Authorization: "bearer " + token}}).then((res) => {
            if (typeof (res) === 'string') {
                return [res]
            } else
                return res.data;
        })
    }

    public async getAllTestUserRoles(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllUserRoles", {headers: {Authorization: "bearer " + token}}).then((res) => {
            if (typeof (res) === 'string') {
                return [res]
            } else
                return res.data;
        })
    }

    public async getAllTestUserAssets(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllAssets", {headers: {Authorization: "bearer " + token}}).then((res) => {
            if (typeof (res) === 'string') {
                return [res]
            } else
                return res.data;
        })
    }

    public async getAllTestUserWallets(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllWallets", {headers: {Authorization: "bearer " + token}}).then((res) => {
            if (typeof (res) === 'string') {
                return [res]
            } else
                return res.data;
        })
    }
}

