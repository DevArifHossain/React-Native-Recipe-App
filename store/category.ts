import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: [
      { label: "Food Expense", value: "food" },
      { label: "Living Expense", value: "living" },
      { label: "Transportation Expense", value: "transportation" },
      { label: "Education Expense", value: "education" },
    ],
  },

  reducers: {},
});
export const selectCategory = (state: any) => state.category.value;
