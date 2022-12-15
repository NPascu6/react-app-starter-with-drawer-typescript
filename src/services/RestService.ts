import axios, {AxiosResponse} from 'axios';

export abstract class RestService {

    /**
     * Abstract method to fetch data from api's
     * @param subPath
     * @param params
     * @protected
     */
    protected async fetchData(subPath: string, params: any = undefined): Promise<AxiosResponse | string> {
        const path = `${subPath}`;
        try {
            return await axios.get(path, params);
        } catch (err: any) {
            console.log(err.message);
            return err.message;
        }
    }

    /**
     * Abstract method to post data to the api
     * @param subPath
     * @param body
     * @protected
     */
    protected async postData(subPath: string, body: any): Promise<AxiosResponse> {
        const path = `${subPath}`;
        try {
            return await axios.post(path, body);
        } catch (err: any) {
            console.log(err.message);
            return err.message;
        }

    }

    /**
     * Abstract method to update data
     * @param subPath
     * @param body
     * @protected
     */
    protected async putData(subPath: string, body: any = undefined): Promise<AxiosResponse> {
        const path = `${subPath}`;
        try {
            return await axios.patch(path, body);
        } catch (err: any) {
            console.log(err.message);
            return err.message;
        }
    }

    /**
     * Abstract method to delete data
     * @param subPath
     * @protected
     */
    protected async deleteData(subPath: string): Promise<AxiosResponse> {
        const path = `${subPath}`;
        try {
            return await axios.delete(path);
        } catch (err: any) {
            console.log(err.message);
            return err.message;
        }
    }
}
