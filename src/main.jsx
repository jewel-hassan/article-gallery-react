import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import ArticleForm from "./components/Article/ArticleFrom.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
   
  },
  {
    path:"/articaleform",
    element:<ArticleForm/>
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
