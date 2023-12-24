import { createSlice } from "@reduxjs/toolkit";
import { OperationTypes } from "../../types";

export interface IStationOperationSlice {
  type: OperationTypes | null;
  trainFirstId: number | null;
  trainSecondId: number | null;
  wayFirstId: number | null;
  waySecondId: number | null;
  parkFirstId: number | null;
  parkSecondId: number | null;
  stationFirstId: number | null;
  stationSecondId: number | null;
}

export const initialState: IStationOperationSlice = {
  type: null,
  trainFirstId: null,
  trainSecondId: null,
  wayFirstId: null,
  waySecondId: null,
  parkFirstId: null,
  parkSecondId: null,
  stationFirstId: null,
  stationSecondId: null,
};

export const stationOperationSlice = createSlice({
  name: "stationOperationSlice",
  initialState,
  reducers: {
    setMoveTrain: (state: IStationOperationSlice, { payload }) => {
      state.trainFirstId = Number(payload.trainFirstId);
      state.type = OperationTypes.MOVE;
      state.trainSecondId = Number(payload.trainFirstId);
      state.wayFirstId = payload.firstWayId;
      state.waySecondId = payload.waySecondId;
      state.parkFirstId = payload.parkFirstId;
      state.parkSecondId = payload.parkSecondId;
      state.stationFirstId = payload.stationFirstId;
      state.stationSecondId = payload.stationSecondId;
    },
    clearOperation: (state: IStationOperationSlice) => {
      state.trainFirstId = null;
      state.type = null;
      state.trainSecondId = null;
      state.parkFirstId = null;
      state.parkSecondId = null;
      state.stationFirstId = null;
      state.stationSecondId = null;
    },
  },
});

export default stationOperationSlice.reducer;

export const { setMoveTrain, clearOperation } = stationOperationSlice.actions;
