import { IUser } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
  currentUser: IUser | null
}

const initialState: IUserState = {
  currentUser: null
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload
    }
  }
})

export default userSlice.reducer

export const { logout, setUser } = userSlice.actions
