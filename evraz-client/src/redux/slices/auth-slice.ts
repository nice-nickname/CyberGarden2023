import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserType = "admin" | "popusk";

export interface IAuthState {
  role: UserType;
  isAuthenticated: boolean;
  allowedStation: number | null;
}

export const initialState: IAuthState = {
  isAuthenticated: false,
  role: "popusk",
  allowedStation: 0
};

export const authSlise = createSlice({
  name: "authSlise",
  initialState: initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<{ type: UserType, allowedStation: number | null }>) => {
      state.role = action.payload.type;
      state.allowedStation = action.payload.allowedStation
      state.isAuthenticated = true
    },
  },
});

export const {
  authenticate
} = authSlise.actions

export default authSlise.reducer