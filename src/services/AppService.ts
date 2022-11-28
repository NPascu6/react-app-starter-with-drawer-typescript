import {RestService} from './RestService';

export class AppService extends RestService {
    private _baseUrl = 'https://api.github.com';

    public async getGithubProjectInfo(projectName: string): Promise<any[]> {
        return this.fetchData(this._baseUrl + '/repos/NPascu6/' + projectName, {
            headers: {
                Authorization: `token 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`,
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
                Authorization: `token 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`,
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }
}

