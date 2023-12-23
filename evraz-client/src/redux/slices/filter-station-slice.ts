import { createSlice } from "@reduxjs/toolkit";

export interface IStationState {
  allLines: boolean,
  wihtNumber: boolean,
}

export const initialState: IStationState = {
    allLines: true,
    wihtNumber: false,
};

export const filterStationSlice = createSlice({
  name: "filterStationSlice",
  initialState,
  reducers: {
    setLineFilter: (state) =>{
        state.allLines = !state.allLines
    },
    setNumberFilter: (state) =>{
        state.wihtNumber = !state.wihtNumber
    },
  },
});

export default filterStationSlice.reducer;

export const { setLineFilter, setNumberFilter } = filterStationSlice.actions;
