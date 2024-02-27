import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Home from './pages/Home'
import Expense from './pages/Expense'
import Income from './pages/Income'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import 'react-tippy/dist/tippy.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/expense",
        element: <Expense />,
      },
      {
        path: "/income",
        element: <Income />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
