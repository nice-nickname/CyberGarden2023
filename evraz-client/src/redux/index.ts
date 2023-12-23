import { configureStore } from "@reduxjs/toolkit";
import stationOperationReducer from "./slices/station-operation-slice";

export const store = configureStore({
  reducer: { stationOperationReducer },
});
