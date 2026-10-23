import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home, Login, Signup } from "./index.jsx";
import Layout from "./hoc/Layout.jsx";
import Dashboard from './components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"Dashboard",
          element:<Dashboard/>
        },
  
         {
          path:"login",
          element:<Login/>
        },
        {
          path:"signup",
          element:<Signup/>
        },
      ]
    }
  ]
)




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
