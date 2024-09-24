import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Identifier from "./Identifier";
import IonosLog from "./IonosLog";
import EnterPassword from "./EnterPassword";
import EnterPassword2 from "./EnterPassword2";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Identifier /> },
      { path: "/de", element: <IonosLog /> },
      { path: "/pass", element: <EnterPassword /> },
      { path: "/pass2", element: <EnterPassword2 /> },
    ],
  },
]);

export default route;
