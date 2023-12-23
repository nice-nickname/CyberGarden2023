import { createSlice } from "@reduxjs/toolkit"

export interface IOpenFormsState {
  formIds: number[]
}

export const initialiState: IOpenFormsState = {
  formIds: []
}

export const openFormsSlice = createSlice({
  name: 'openFromsSlice',
  initialState: initialiState,
  reducers: {
    addOpenForm: (state: IOpenFormsState, { payload }) => {
      console.log('state', payload)
      state.formIds = payload
    }
  }
})

export default openFormsSlice.reducer

export const {
  addOpenForm
} = openFormsSlice.actions