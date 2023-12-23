import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type UserType = "admin" | "popusk"

export interface IAuthState {
  role: UserType,
  isAuthenticated: boolean
}

export const initialState: IAuthState = {
  isAuthenticated: false,
  role: 'popusk'
}

export const authSlize = createSlice({
  name: 'authSlise',
  initialState: initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<UserType>) => {
      state.role = action.payload
    }
  }
})
