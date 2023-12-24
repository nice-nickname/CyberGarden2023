import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ActionType = "add" | "delete" | "init";

export interface IOpenFormsState {
  formIds: number[];
  lastAction: ActionType;
}

export const initialiState: IOpenFormsState = {
  formIds: [],
  lastAction: "delete",
};

export const openFormsSlice = createSlice({
  name: "openFromsSlice",
  initialState: initialiState,
  reducers: {
    addOpenForm: (state: IOpenFormsState, { payload }) => {
      state.formIds = payload.items;
      state.lastAction = payload.action;
    },

    removeOpenForm: (state, action: PayloadAction<number>) => {
      state.lastAction = "delete";
      state.formIds = [...state.formIds.filter((s) => s !== action.payload)];
    },

    clearOpenForm: (state) => {
      state.lastAction = "delete";
    },
  },
});

export default openFormsSlice.reducer;

export const { addOpenForm, removeOpenForm, clearOpenForm } =
  openFormsSlice.actions;
