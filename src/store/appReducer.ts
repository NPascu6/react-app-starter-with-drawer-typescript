import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppSliceState {
    drawerOpen: boolean;
}

const initialState: AppSliceState = {
    drawerOpen: false
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers: {
        handleDrawerChange(state, action: PayloadAction<boolean>) {
            state.drawerOpen = action.payload;
            console.log('Set drawerOpen:', action.payload)

        }
    },
});

export const {
    handleDrawerChange
} = appSlice.actions;

export default appSlice.reducer;