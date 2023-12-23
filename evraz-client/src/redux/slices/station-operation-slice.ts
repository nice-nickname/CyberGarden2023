import { createSlice } from "@reduxjs/toolkit";
import { OperationTypes } from "../../types";

export interface IStationOperationSlice {
  type: OperationTypes | null;
  trainFirstId: number | null;
  trainSecondId: number | null;
}

export const initialState: IStationOperationSlice = {
  type: null,
  trainFirstId: null,
  trainSecondId: null,
};

export const stationOperationSlice = createSlice({
  name: "stationOperationSlice",
  initialState,
  reducers: {
    setMoveTrain: (state: IStationOperationSlice, { payload }) => {
      state = { ...state, ...payload, type: OperationTypes.MOVE };
    },
    clearOperation: (state: IStationOperationSlice) => {
      state.trainFirstId = null;
      state.type = null;
      state.trainSecondId = null;
    },
  },
});

export default stationOperationSlice.reducer;

export const { setMoveTrain, clearOperation } = stationOperationSlice.actions;
