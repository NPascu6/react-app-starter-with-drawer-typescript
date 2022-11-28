import {RestService} from './RestService';
const REACT_APP_NOT_SECRET_CODE = process.env

export class AppService extends RestService {
    private _baseUrl = 'https://api.github.com';

    public async getGithubProjectInfo(projectName: string): Promise<any[]> {
        return this.fetchData(this._baseUrl + '/repos/NPascu6/' + projectName, {
            headers: {
                Authorization: `token ${REACT_APP_NOT_SECRET_CODE}`,
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }

    public async getGithubUserInfo(): Promise<any[]> {
        return this.fetchData(this._baseUrl + "/users/NPascu6", {
            headers: {
                Authorization: `token ${REACT_APP_NOT_SECRET_CODE}`,
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }
}

