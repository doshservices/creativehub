import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    authToken: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        clearAuthToken: (state) => {
            state.authToken = null;
        },
    },
});

export const { setUser, clearUser, setAuthToken, clearAuthToken } = userSlice.actions;
export default userSlice.reducer;