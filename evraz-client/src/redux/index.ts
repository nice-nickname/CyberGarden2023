import { configureStore } from "@reduxjs/toolkit";
import stationOperationReducer from "./slices/station-operation-slice";
import stationReducer from "./slices/station-slice";

export const store = configureStore({
  reducer: { 
    stationOperationReducer,
    stationReducer,
  },
});
