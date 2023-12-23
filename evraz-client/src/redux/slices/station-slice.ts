import { createSlice } from "@reduxjs/toolkit";

export interface IStationState {
  stationId: number | null;
}

export const initialState: IStationState = {
  stationId: null,
};

export const stationSlice = createSlice({
  name: "stationSlice",
  initialState,
  reducers: {
    setStation: (state, { payload }) => {
      state.stationId = payload.id;
    },
  },
});

export default stationSlice.reducer;

export const { setStation } = stationSlice.actions;
