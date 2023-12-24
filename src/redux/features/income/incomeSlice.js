import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../services/supabase";

export const insertIncome = createAsyncThunk(
  "income/insertIncome",
  async (data, { dispatch }) => {
    try {
      const { error } = await supabase.from("income").insert({
        name: data.expenseName,
        amount: data.expenseAmount,
        date: data.expenseDate,
      });
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(insertIncome.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default incomeSlice.reducer;