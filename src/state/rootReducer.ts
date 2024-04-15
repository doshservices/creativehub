import { combineReducers } from 'redux'
import userSLice from './slice/authSlice'

export const rootReducer = combineReducers({
    auth: userSLice,
})

// export default rootReducer
export type RootState = ReturnType<typeof rootReducer>