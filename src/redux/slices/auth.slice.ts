import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  accessToken: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: 'accessToken'
}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    }
  }
})

export default authSlice.reducer

export const { logout, setUser } = authSlice.actions
