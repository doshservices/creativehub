import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notification : null
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        saveNotification: (state, action) => {
            state.notification = action.payload
        }
    }
})

export const { saveNotification } = notificationSlice.actions;
export default notificationSlice.reducer