import { createBrowserRouter } from "react-router-dom";
import Actions from "./pages/Actions";
import Form from "./pages/Form";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Actions />,
  },
  {
    path: "/login/:id",
    element: <Form />,
  },
]);
