import {RestService} from './RestService';

const REACT_APP_SECRET = process.env.REACT_APP_SECRET

export class AppService extends RestService {
    private _baseUrl = 'https://api.github.com';

    public async getGithubProjectInfo(projectName: string): Promise<any[]> {
        return this.fetchData(this._baseUrl + '/repos/NPascu6/' + projectName, {
            headers: {
                Authorization: `token ${REACT_APP_SECRET}`,
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }

    public async getGithubUserInfo(): Promise<any[]> {
        return this.fetchData(this._baseUrl + "/users/NPascu6", {}).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }

    public async  getTestUsers(token: any): Promise<any[]> {
        return this.fetchData("https://localhost:7282/GetAllUsers", {headers: {Authorization: "bearer " + token}}).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }
}

