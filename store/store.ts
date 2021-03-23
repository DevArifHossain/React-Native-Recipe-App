import { createSlice, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./category";
import { expenseSlice } from "./expense";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 423,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCount = (state: any) => state.counter.value;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    category: categorySlice.reducer,
    expense: expenseSlice.reducer,
  },
});
