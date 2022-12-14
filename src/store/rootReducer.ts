import {combineReducers} from '@reduxjs/toolkit';
import authReducer from "./authReducer";
import testAPIReducer from "./testAPIReducer";
import appReducer from './appReducer';

const rootSlice = combineReducers({
    app: appReducer,
    auth: authReducer,
    testAPI: testAPIReducer
});

export type RootState = ReturnType<typeof rootSlice>;

export default rootSlice;
