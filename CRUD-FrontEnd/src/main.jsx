import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import ErrPage from "./Components/ErrPage/ErrPage";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import UpdateOneUser from "./Components/UpdateOneUser/UpdateOneUser";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Root></Root>,
    errorElement: <ErrPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:3000/getAllUser"),
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/editOneUser/:id",
        element: <UpdateOneUser></UpdateOneUser>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5173/editOneUser/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
