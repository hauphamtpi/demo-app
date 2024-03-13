import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import userSlice from './slices/user.slice'
import authSlice from './slices/auth.slice'
import { postsAPi } from '@/apis/postsApi'

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    [postsAPi.reducerPath]: postsAPi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([postsAPi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
