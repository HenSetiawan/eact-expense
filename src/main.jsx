import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import 'react-tippy/dist/tippy.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
