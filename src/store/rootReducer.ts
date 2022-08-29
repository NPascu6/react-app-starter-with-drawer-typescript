import appReducer from './appReducer';
import {combineReducers} from '@reduxjs/toolkit';
import authReducer from "./authReducer";

const rootSlice = combineReducers({
    app: appReducer,
    auth: authReducer
});

export type RootState = ReturnType<typeof rootSlice>;

export default rootSlice;
