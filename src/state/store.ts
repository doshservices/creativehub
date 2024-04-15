import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import rootReducer from '../rootReducer'
import { rootReducer, RootState } from './rootReducer'

export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth', 'apartment'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

// import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
// import chatTabModeReducer from './slice/chatViewSlice';
// import userReducer from './slice/userSlice';
// import notificationReducer from './slice/notificationSlice';
// import jwtReducer from "./slice/authSlice";
// import { persistReducer, persistStore } from 'redux-persist';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const rootReducer = combineReducers({
//     chat: chatTabModeReducer,
//     user: userReducer,
//     notification: notificationReducer,
//     jwtSlice: jwtReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: [thunk]
// })

// export const persistor = persistStore(store)

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     user: null
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload;
//         },
//         saveUser: (state, action) => {
//             state.user = action.payload;
//         },
//         clearUser: (state) => {
//             state.user = null;
//         },
//     },
// });

// export const { setUser, clearUser, saveUser } = userSlice.actions;
// export default userSlice.reducer;

