import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Typography = lazy(() => import("./pages/design/typography"));


export default function Router() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <Home /> ,
    },
    {
      path: 'design/typography',
      element: <Typography />,
    },

  ]);
  return (
    <RouterProvider router={router} />
  );
}