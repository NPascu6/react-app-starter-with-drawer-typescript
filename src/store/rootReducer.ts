import {combineReducers} from '@reduxjs/toolkit';
import authReducer from "./authReducer";
import testAPIReducer from "./testAPIReducer";
import appReducer from './appReducer';
import chatReducer from './chatReducer';


const rootSlice = combineReducers({
    app: appReducer,
    auth: authReducer,
    testAPI: testAPIReducer,
    chat: chatReducer
});

export type RootState = ReturnType<typeof rootSlice>;

export default rootSlice;
