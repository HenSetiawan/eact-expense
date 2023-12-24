import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expense/expenseSlice";
import incomeReducer from "./features/income/incomeSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    income: incomeReducer,
  },
});
