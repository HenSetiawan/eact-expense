import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../services/supabase";

export const insertIncome = createAsyncThunk(
  "income/insertIncome",
  async (data, { dispatch }) => {
    try {
      const { error } = await supabase.from("income").insert({
        name: data.incomeName,
        amount: data.incomeAmount,
        date: data.incomeDate,
      });
      dispatch(fetchIncome());
    } catch (error) {
      return error;
    }
  }
);

export const updateIncome = createAsyncThunk(
  "expense/updateIncome",
  async (params, { dispatch }) => {
    try {
      const { error } = await supabase
        .from("income")
        .update({
          name: params.data.incomeName,
          amount: params.data.incomeAmount,
          date: params.data.incomeDate,
        })
        .eq("id", params.id);
      dispatch(fetchIncome());
      if (error) {
        console.log(error);
      }
    } catch (error) {
      return error;
    }
  }
);

export const fetchIncome = createAsyncThunk("expense/fetchIncome", async () => {
  try {
    let { data: expense, error } = await supabase
      .from("income")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      return error;
    }
    return expense;
  } catch (error) {
    console.error(error);
    return error;
  }
});

export const deleteIncome = createAsyncThunk(
  "expense/deleteIncome",
  async (id, { dispatch }) => {
    try {
      const { error } = await supabase.from("income").delete().eq("id", id);
      dispatch(fetchIncome());
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
    builder.addCase(insertIncome.fulfilled, (state, action) => {
      state.contents = action.payload;
    });
    builder.addCase(fetchIncome.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchIncome.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(deleteIncome.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateIncome.fulfilled, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default incomeSlice.reducer;
