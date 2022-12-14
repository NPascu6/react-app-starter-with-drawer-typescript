import {RestService} from '../RestService';
import {User} from "./models";

export class NPascuAPIService extends RestService {
    private _baseUrl = 'https://aspcorebasicnet6api20221214201717.azurewebsites.net';
    //private _baseUrl = 'https://localhost:7282'

    public async getAllTestUsers(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllUsers", {headers: {Authorization: "bearer " + token}}).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }

    public async getAllTestUserDetails(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllUserDetails", {headers: {Authorization: "bearer " + token}}).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }

    public async getAllTestUserRoles(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllUserRoles", {headers: {Authorization: "bearer " + token}}).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }

    public async getAllTestUserAssets(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllAssets", {headers: {Authorization: "bearer " + token}}).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }

    public async getAllTestUserWallets(token: any): Promise<User[]> {
        return this.fetchData(this._baseUrl + "/GetAllWallets", {headers: {Authorization: "bearer " + token}}).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }
}

