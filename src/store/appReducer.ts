import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppSliceState {
    drawerOpen: boolean;
    isDarkTheme: boolean;
    githubProfiles: any[];
    githubProfile: any;
    theme: string,
    finhubMessages: any[]
}

const initialState: AppSliceState = {
    drawerOpen: false,
    isDarkTheme: false,
    githubProfiles: [],
    githubProfile: null,
    theme: "lightTheme",
    finhubMessages:[]
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers: {
        handleDrawerChange(state, action: PayloadAction<boolean>) {
            state.drawerOpen = action.payload;
            console.log('Set drawerOpen:', action.payload)
        },
        handleThemeChange(state, action: PayloadAction<boolean>) {
            state.isDarkTheme = action.payload
            console.log('Set is dark theme:', action.payload)
        },
        setGithubProfiles(state, action: PayloadAction<any[]>) {
            state.githubProfiles = action.payload
            console.log('Set github profiles:', action.payload)
        },
        setGithubProfile(state, action: PayloadAction<any[]>) {
            state.githubProfile = action.payload
            console.log('Set github profile:', action.payload)
        },
        setTheme(state, action: PayloadAction<string>) {
            console.log('setTheme:', action.payload)
            state.theme = action.payload
        },
        setFinhubMessages(state, action: PayloadAction<any[]>) {
            state.finhubMessages = action.payload
        }
    },
});

export const {
    handleDrawerChange,
    handleThemeChange,
    setGithubProfiles,
    setGithubProfile,
    setTheme,
    setFinhubMessages
} = appSlice.actions;

export default appSlice.reducer;
