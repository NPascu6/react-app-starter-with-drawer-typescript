import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from "../services/npascu-test-api/models";

interface TestAPISliceState {
    allTestUsers: User[]
    allTestUserDetails: any[]
    allTestUserRoles: any[]
    allTestAssets: any[]
    allTestWallets: any[]
}

const initialState: TestAPISliceState = {
    allTestUsers: [],
    allTestUserDetails: [],
    allTestUserRoles: [],
    allTestAssets: [],
    allTestWallets: [],
};

const testAPISlice = createSlice({
    name: 'testAPISlice',
    initialState: initialState,
    reducers: {
        setAllTestUsers(state, action: PayloadAction<any>) {
            state.allTestUsers = action.payload;
            console.log('Set test users:', action.payload)
        },
        setAllTestUserDetails(state, action: PayloadAction<any>) {
            state.allTestUserDetails = action.payload;
            console.log('Set test user details:', action.payload)
        },
        setAllTestUserRoles(state, action: PayloadAction<any>) {
            state.allTestUserRoles = action.payload;
            console.log('Set test user roles:', action.payload)
        },
        setAllTestAssets(state, action: PayloadAction<any>) {
            state.allTestAssets = action.payload;
            console.log('Set test assets:', action.payload)
        },
        setAllTestWallets(state, action: PayloadAction<any>) {
            state.allTestWallets = action.payload;
            console.log('Set test wallets:', action.payload)
        }
    }
});

export const {
    setAllTestUsers,
    setAllTestUserDetails,
    setAllTestUserRoles,
    setAllTestAssets,
    setAllTestWallets
} = testAPISlice.actions;

export default testAPISlice.reducer;
