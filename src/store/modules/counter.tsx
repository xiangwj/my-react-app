import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    message: 'hello',
  },
  reducers: {
    changeMesssageAction: (state, { payload }) => {
      state.message = payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});
export const { changeMesssageAction } = counterSlice.actions;
export default counterSlice.reducer;
