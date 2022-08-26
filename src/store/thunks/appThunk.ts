import {AppService} from '../../services/AppService';
import {setGithubProfile, setGithubProfiles} from '../appReducer';
import {_githubRepoTitles} from '../../_constant';

/**
 * Fetch recent otc orders for the selected account
 * @param accountId
 */
export const fetchGithubProfile = () => async (dispatch: any) => {
    console.log('Fetching github profile');
    const service = new AppService();
    let promises = [];

    for (let item of _githubRepoTitles) {
        promises.push(await service.getGithubProjectInfo(item));
    }

    Promise.all(promises).then((res) =>  dispatch(setGithubProfiles(res)))
};

export const fetchGithubUserProfile = () => async (dispatch: any) => {
    console.log('Fetching github user profile');
    const service = new AppService();
    const res = await service.getGithubUserInfo()
    dispatch(setGithubProfile(res))
};
