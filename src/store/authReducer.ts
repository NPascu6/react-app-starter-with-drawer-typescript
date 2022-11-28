import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthSliceState {
    firebaseUser: any;
    firebaseLoading: any
    firebaseError: any;
}

const initialState: AuthSliceState = {
    firebaseUser: null,
    firebaseLoading: null,
    firebaseError: null
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        setFirebaseUser(state, action: PayloadAction<any>) {
            state.firebaseUser = action.payload;
            console.log('Set firebaseUser:', action.payload)
        },
        setFirebaseLoading(state, action: PayloadAction<any>) {
            state.firebaseLoading = action.payload
            console.log('Set firebaseLoading:', action.payload)
        },
        setFirebaseError(state, action: PayloadAction<any>) {
            state.firebaseError = action.payload
            console.log('Set firebaseError:', action.payload)
        }
    }
});

export const {
    setFirebaseUser,
    setFirebaseLoading,
    setFirebaseError
} = authSlice.actions;

export default authSlice.reducer;
