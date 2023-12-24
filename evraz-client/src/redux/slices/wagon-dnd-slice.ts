import { createSlice } from "@reduxjs/toolkit";

export interface IStationState {
  wagons: {
    id: number,
    wayId: number,
    parkId: number,
    stationId: number,
  }[] | null
}

export const initialState: IStationState = {
    wagons: null
};

export const wagonsSlice = createSlice({
  name: "stationSlice",
  initialState,
  reducers: {
    setWagon: (state, { payload }) => {
        state.wagons = [payload]
      },
    addWagon: (state, { payload }) => {
            if(state.wagons?.find(w => w.id === payload.id)) {
                state.wagons = state.wagons?.filter(w => w.id !== payload.id)
            } else {
                state.wagons?.push(payload)
            }
        },
    },
});

export default wagonsSlice.reducer;

export const { setWagon, addWagon } = wagonsSlice.actions;
