import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    authToken: null,
    verificationMail: null
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
            state.authToken = null;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        clearAuthToken: (state) => {
            state.authToken = null;
        },
        setVerificationMail: (state, action) => {
            state.verificationMail = action.payload;
        },
        clearVerificationMail: (state) => {
            state.verificationMail = null;
        }
    },
});

export const {
    setUser,
    clearUser,
    setAuthToken,
    clearAuthToken,
    setVerificationMail,
    clearVerificationMail
} = userSlice.actions;
export default userSlice.reducer;