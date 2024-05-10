import { combineReducers } from 'redux'
import userSLice from './slice/authSlice'
import notificationSlice from './slice/notificationSlice'

export const rootReducer = combineReducers({
    auth: userSLice,
    notification: notificationSlice
})

// export default rootReducer
export type RootState = ReturnType<typeof rootReducer>