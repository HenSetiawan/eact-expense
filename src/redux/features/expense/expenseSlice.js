import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../services/supabase";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    try {
      let { data: expense, error } = await supabase.from("expense").select("*");
      if (error) {
        console.error(error);
        return error;
      }
      return expense;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const expenseSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default expenseSlice.reducer;
