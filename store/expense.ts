import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    value: <any>[],
  },

  reducers: {
    addExpense: (state, payload) => {
      if (payload.type === "expense/addExpense") {
        state.value = [...state.value, payload.payload];
      }
    },
  },
});

export const { addExpense } = expenseSlice.actions;

export const selectExpense = (state: any) => state.expense.value;
