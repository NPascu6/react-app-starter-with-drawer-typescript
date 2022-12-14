import {NPascuAPIService} from "../../services/npascu-test-api/NPascuAPI";
import {User} from "../../services/npascu-test-api/models";
import {
    setAllTestAssets,
    setAllTestUserDetails,
    setAllTestUserRoles,
    setAllTestUsers,
    setAllTestWallets
} from "../testAPIReducer";

export const fetchTestUsers = (token: any) => async (dispatch: any) => {
    const service = new NPascuAPIService();
    const res: User[] = await service.getAllTestUsers(token)
    console.log(res)
    dispatch(setAllTestUsers(res))
};

export const fetchAllTestUsersDetails = (token: any) => async (dispatch: any) => {
    const service = new NPascuAPIService();
    const res: User[] = await service.getAllTestUserDetails(token)
    console.log(res)
    dispatch(setAllTestUserDetails(res))
};

export const fetchAllTestUserRoles = (token: any) => async (dispatch: any) => {
    const service = new NPascuAPIService();
    const res: User[] = await service.getAllTestUserRoles(token)
    console.log(res)
    dispatch(setAllTestUserRoles(res))
};

export const fetchAllTestUserAssets = (token: any) => async (dispatch: any) => {
    const service = new NPascuAPIService();
    const res: User[] = await service.getAllTestUserAssets(token)
    console.log(res)
    dispatch(setAllTestAssets(res))
};

export const fetchAllTestUserWallets = (token: any) => async (dispatch: any) => {
    const service = new NPascuAPIService();
    const res: User[] = await service.getAllTestUserWallets(token)
    console.log(res)
    dispatch(setAllTestWallets(res))
};
