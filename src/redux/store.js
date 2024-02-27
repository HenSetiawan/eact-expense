import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expense/expenseSlice";
import incomeReducer from "./features/income/incomeSlice";
import authReducer from "./features/auth/authSice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    income: incomeReducer,
    auth: authReducer
  },
});
