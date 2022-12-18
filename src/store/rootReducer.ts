import {combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';

import authReducer from "./authReducer";
import testAPIReducer from "./testAPIReducer";
import appReducer from './appReducer';
import chatReducer from './chatReducer';


const chatPersistConfig: any = {
    key: 'chat',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const rootSlice = combineReducers({
    app: appReducer,
    auth: authReducer,
    testAPI: testAPIReducer,
    chat: persistReducer(chatPersistConfig, chatReducer)
});

export type RootState = ReturnType<typeof rootSlice>;

export default rootSlice;
