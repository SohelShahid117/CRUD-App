import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import ErrPage from "./Components/ErrPage/ErrPage";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import UpdateOneUser from "./Components/UpdateOneUser/UpdateOneUser";

import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { getTodos, postTodo } from "../my-api";
import Users from "./Components/Users/Users";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    //hello
    //hello
    element: <Root></Root>,
    errorElement: <ErrPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("https://crud-app-server-eight.vercel.app/getAllUser"),
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
      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    {/* <Todos /> */}
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
