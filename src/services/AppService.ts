import {RestService} from './RestService';

export class AppService extends RestService {
    private _baseUrl = 'https://api.github.com';

    public async getGithubProjectInfo(projectName: string): Promise<any[]> {
        return this.fetchData(this._baseUrl + '/repos/NPascu6/' + projectName, {
            headers: {
                Authorization: `token `,
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
}

